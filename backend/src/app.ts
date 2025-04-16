import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import userRoutes from './routes/user.routes'
import { errorHandler } from './middlewares/error.middleware'
import path from 'path'

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/users', userRoutes)

// Root route
app.get('/', (_, res) => {
  res.send('API running 🚀')
})

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))


// Global error handling middleware
app.use(errorHandler)

export default app
