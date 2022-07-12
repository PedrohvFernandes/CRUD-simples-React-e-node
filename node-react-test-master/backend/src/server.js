import express from 'express'
import cors from 'cors'
import {routes} from './routes.js'

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`))
