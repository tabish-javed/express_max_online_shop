import path from "node:path"
import url from "node:url"

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename).split("/").slice(0, -1).join("/")


export default { __dirname }
