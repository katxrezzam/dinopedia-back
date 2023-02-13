import express from 'express'
const routerRoot = express.Router()
import path from 'path'

routerRoot.get('^/$|/index(.html)?', (_req, res) => {
  res.sendFile(path.join(__dirname, '..','views','index.html'))
})

export default routerRoot
