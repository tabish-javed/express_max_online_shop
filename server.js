import https from "https"
// import http from 'http'
import dotenv from 'dotenv'
import fs from 'fs'
import app from "./app.js"


dotenv.config()


// environment variables
const port = process.env.DEV_PORT
const options = {
  key: fs.readFileSync(process.env.PRI_KEY),
  cert: fs.readFileSync(process.env.CERTIFICATE)
}

// start server
https.createServer(options, app).listen(port, () => {
  console.log(`Server started listening on port ${port}`)
})

// http.createServer(app).listen(2000, () => {
//   console.log(`Server started listening on port ${2000}`)
// })