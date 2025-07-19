require('dotenv').config()
const express = require('express')
const { Pool } = require('pg')
const app = express()
const port = process.env.PORT || 3000

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

app.get('/', async (req, res) => {
  const result = await pool.query('SELECT NOW()')
  res.send(`API online. Hora atual: ${result.rows[0].now}`)
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
