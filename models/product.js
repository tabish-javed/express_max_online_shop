import fs from "fs/promises"
import path from "path"
import dirName from "../utilities/dirname.js"


const fileName = path.join(dirName.__dirname, "data", "products.json")


async function readData () {
  try {
    const data = await fs.readFile(fileName)
    return await JSON.parse(data)
  } catch (error) {
    return []
  }
}

async function writeData (data) {
  fs.writeFile(fileName, JSON.stringify(data))
}


class Product {
  constructor (title) {
    this.title = title
  }

  async save () {
    const products = await readData()
    products.push(this)
    writeData(products)
  }

  static async fetchAll () {
    return await readData()
  }

  /* // ANOTHER WAY OF HANDLING PRODUCTS USING CALLBACK - CHECK PRODUCTS.JS
  static async fetchAll (callback) {
    try {
      const data = await fs.readFile(fileName)
      callback(await JSON.parse(data))
    } catch (error) {
      if (error.code === "ENOENT") {
        callback([])
      }
    }
  }
  */
}


export default { Product }