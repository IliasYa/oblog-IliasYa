// LANCEMENT DU SERVER AVEC SCRIPT npm start

require('dotenv').config()
const router = require('./app/router')

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({
    extended : true
}))

app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})