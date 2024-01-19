import express from 'express'
import { apiRouter } from '../router/api.js'
import { errorMiddleware } from '../middleware/error-middleware.js'
import cors from 'cors'

const web = express()
web.use(cors())
web.use(express.json())
web.use(express.urlencoded({ extended: true }))
web.use(apiRouter)
web.use(errorMiddleware)

export { web }


