import { Hono } from 'hono'

const app = new Hono()



async function authMiddleware(c:any,next:any){
  //if the authorization header comes, then it goest to the next function
  //here next() means the next function
  //
  if (c.req.header("Authorization")){
    await next()


  }
  else{
    return c.text("you are not authorized");
  }

}

// writing this function, i.e. authMiddleware, in the app
app.use(authMiddleware)
// which means it will run for every request
// probably not a good idea, but it's just an example
// standard, it will be written like below

/*

// this function will run for every request
app.get('/', authMiddleware,async (c) => {

  return c.text('Hello Hono!fnn')
})

*/




app.get('/', async (c) => {

  return c.text('Hello Hono!fnn')
})

app.post('/', async (c)=>{

  const body=await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));
  return c.text('Hellp Hono!')
})
export default app
