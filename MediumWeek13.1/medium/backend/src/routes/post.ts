import {createBlogInput,updateBlogInput} from "@abhinavpatra/common";


import { Hono } from "hono";
import { verify } from "hono/jwt";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    };
    Variables: {
        userId: string;
    };
}>();

blogRouter.use('/*', async (c, next) => {
    const authHeader = c.req.header('Authorization') || "";
    console.log(`Request method: ${c.req.method}, Path: ${c.req.url}`);
    const user = await verify(authHeader, c.env.JWT_SECRET);
    if (user) {
        // Ensure user.id is treated as a string
        c.set('userId', user.id as string);
        await next();
    } else {
        c.status(401);
        return c.json({
            message: "You are not authorized"
        });
    }
});


blogRouter.post('/new-post', async (c) => {
    
    const body = await c.req.json();
    const { success } = createBlogInput.safeParse(body);
    
    if (!success) {
        c.status(411);
        return c.json({ message: "Invalid INPUT/inputs" });
    }

    const userId = c.get('userId') as string;
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: userId || ""
        }
    });

    return c.json({ id: post.id });
});



blogRouter.put('/update-post', async (c) => {
    const body = await c.req.json();
   const {success}= updateBlogInput.safeParse(body);
   if(!success){
    c.status(411);
    return c.json({
        message:"ivalid INPUT/inputs"
    })
   }
    
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const post = await prisma.post.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content,
            
        }
    });

    return c.json({
        id: post.id
    });
});


// this endpoint /:id with params also but creates problems with /bulk so we are making it /specific/:id

blogRouter.get(`/specific/:id`, async (c) => {
    const id = c.req.param("id");
   
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    try {
        const post = await prisma.post.findFirst({
            where: {
                id: id
            },
        });

        return c.json({
            post
        });
    } catch (e) {
        c.status(404);
        return c.json({"womp womp it doesn't work": e});
    }
});


// this part is working /bulk end point

blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try{
        const posts = await prisma.post.findMany({
            select:{
                content:true,
                title:true,
                id:true,
                author:{
                    select:{
                        name:true
                        
                    }
                    
                }

            }
        });
        return c.json({
            posts
        });
    }
    catch(e){
        return c.json({
            "error fetching data from DB": e
        })
        
    }


});

export default blogRouter;
