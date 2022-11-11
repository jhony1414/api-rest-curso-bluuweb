import express from 'express'
import 'dotenv/config'
import './database/connectdb.js'
import authRouter from './routes/auth.route.js'

const app = express()
const port = process.env.PORT || 3000
//Leer datos con json
app.use(express.json())
//Rutas
app.use('/api/v1', authRouter)


app.listen(port, ()=>{
    console.log(`Servidor en : http://127.0.0.1:${port}`);
})