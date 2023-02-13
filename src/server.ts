import express from 'express'
import cors from 'cors'
import path from 'path'
import { config } from 'dotenv'
import './models/_validation'
import routerRoot from './routes/root'
import routerDinosaur from './routes/dinosaurRouter'
import { corsOptions } from './lib/cors/corsOption'
import { initDB } from './db/init'

config()
const app = express()
const PORT = process.env.PORT || 3000
const APIPATH = '/api'

//MIDDLEWARE

app.use(express.json())
app.use(cors(corsOptions))
app.use(express.urlencoded( { extended: false } ))

//ROUTES

app.use('/',routerRoot)
app.use(`${APIPATH}/dinosaurs`,routerDinosaur)
//
app.all('*', (req, res) => {
  res.status(404)
  if(req.accepts('html')){
    res.sendFile(path.join(__dirname, 'views', '404.html'))
  
  }
  else if (req.accepts('json')){
    res.json({'error': '404 not found'})
  }
  else {
    res.type('text').send('404 not found')
  }
})
//DB
initDB()

app.listen( PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`)
})