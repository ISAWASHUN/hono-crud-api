import { drizzle } from 'drizzle-orm/d1'
import { Hono } from 'hono'
import { todoTable } from '../db/schema'

const app = new Hono<{Bindings: {DB: D1Database}}>()


app.get('/health_cheack', (c) => {
  c.status(200)
  return c.body("Status OK!!")
})

// Todo API
app.
  get('/todos', async (c) => {
    const db = drizzle(c.env.DB)
    const getAllTodos = await db.select().from(todoTable)
    return c.json(getAllTodos)
  })

export default app
