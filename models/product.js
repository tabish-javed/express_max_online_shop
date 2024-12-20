import fs from "fs/promises"
import dirName from "../utilities/dirname.js"
import path from "path"


const fileName = path.join(dirName.__dirname, "data", "products.json")

class Product {
  constructor (title) {
    this.title = title
  }

  async save () {
    let products = []
    try {
      const data = await fs.readFile(fileName)
      products = JSON.parse(data)
    } catch (error) {
      fs.open(fileName, "a")
    } finally {
      products.push(this)
      fs.writeFile(fileName, JSON.stringify(products))
    }
  }


  static async fetchAll () {
    try {
      const data = await fs.readFile(fileName)
      return await JSON.parse(data)
    } catch (error) {
      if (error.code === "ENOENT") {
        return []
      }
    }
  }
}


export default { Product }