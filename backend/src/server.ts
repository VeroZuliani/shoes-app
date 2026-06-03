import express from "express"
import cors from "cors"
import dotenv from "dotenv"

// Configurar variables de entorno
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

//Endpoint de control
app.get("/api/status", (req, res) => {
    res.json({status: "online", message:"Servidor de control levantado"})
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto http://localhost:${PORT}`)
})
