import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import { fruitsRouter } from './routes/fruits'

export const app = express()
app.use(express.json())
app.use(cors())
app.use(logger('dev'))

app.use('/fruits', fruitsRouter)

app.use('/', (req, res) =>
  res.send(`
    Fruits API. A wrapper for Fruityvice - with CORS!
    <br/>Endpoint: /fruits/:fruitName
  `)
)
