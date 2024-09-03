import { Hono } from 'hono'
import {cors} from 'hono/cors'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'



const app=new Hono<{
  Bindings:{
    DATABASE_URL:string;
    JWT_SECRET:string;
  }
}>()
app.use("/api/*",cors())
app.route("/api/v1/user",userRouter);
app.route("/api/v1/blog",blogRouter);

export default app

// postgresql://postgres:mysecretpassword@localhost:5432/postgres

// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiYzdiNWYzNmQtY2NhNS00MzM5LTlkMGUtNDZlYmNiMDhjNDlhIiwidGVuYW50X2lkIjoiNjAyNzIzYjFjNjYzYjAwZjg5YjIwNzlmNzY5ZjRmZjc5N2RjYWNhOWM2MjA3OTljYWI0OGVhMDlkMGZmYTAxZSIsImludGVybmFsX3NlY3JldCI6IjAyNmMyMWYzLTMxNWQtNDE5Yi05NjFiLWVkNjI5N2FlNTI2YiJ9.ShsA6dPE1_tiP0nlwNS1IDZcSIuuFlWBYPA5-BDGXi4"
