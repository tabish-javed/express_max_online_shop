import https from "https"
import fs from "fs"
import app from "./app.js"
import dirName from "./utilities/dirname.js"


// environment variables
const PORT = 3_000
const CERT_DIR = `${dirName.__dirname}/certificate`
const options = {
  key: fs.readFileSync(`${CERT_DIR}/privatekey.pem`),
  cert: fs.readFileSync(`${CERT_DIR}/certificate.pem`)
}


// start server
https.createServer(options, app).listen(PORT, () => {
  console.log(`Server started listening on port ${PORT}`)
})