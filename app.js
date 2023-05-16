const express = require('express')

const app = express()

const cors = require("cors")

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => res.send('Hello World'))

app.get('*', (req, res) => res.status(404).send("wrong page"))

module.exports = app;