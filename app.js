const express = require('express')
const cors = require('cors')
const app = express()
const connection = require('./connection')
const ServicesRoutes = require('./routes/ServicesRoutes')
const ContactsRoutes = require('./routes/ContactsRoutes')

app.use(express.json())
app.use(cors())

app.use('/api/service',ServicesRoutes)
app.use('/api/contact',ContactsRoutes)

const port = 3000
app.listen(port)