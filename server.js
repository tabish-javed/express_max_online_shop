import https from "https"
import dotenv from 'dotenv'
import fs from 'fs/promises'
import app from "./app.js"


dotenv.config()


async function readCertificate () {
  return {
    key: await fs.readFile(process.env.PRI_KEY),
    cert: await fs.readFile(process.env.CERTIFICATE)
  }
}


// environment variables
const port = process.env.NODE_ENV === "DEV" ? process.env.DEV_PORT : process.env.PRD_PORT
const options = readCertificate()

// start server
https.createServer(options, app).listen(port, () => {
  console.log(`Server started listening on port ${port}`)
})
