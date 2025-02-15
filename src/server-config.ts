import cors from 'cors'
import express, { json } from 'express'

const server = express()
server.use(
  cors({
    origin: 'http://localhost:3000'
  })
)

server.use(json())

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is running' })
})

server.use('/auth/fake-token', (req, res) => {
  const token = `Bearer ${new Date().toISOString()}`
  res.status(200).json({ token, status: 200 })
})

export { server }
