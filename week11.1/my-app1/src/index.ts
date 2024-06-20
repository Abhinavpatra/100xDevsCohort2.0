import { Hono } from 'hono'

const app = new Hono()

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
