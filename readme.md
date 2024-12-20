### Create Self Signed Certificate

```shell
openssl genrsa -out privatekey.pem 2048
openssl req -new -key privatekey.pem -out certrequest.csr
openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem
```

`openssl s_client -showcerts 127.0.0.1:3000`


### The Closures

#### products.js
```Javascript
function getProducts (req, res, next) {
  Product.Product.fetchAll((products) => {
    res.status(200).render('shop', { products, docTitle: "Shop", path: "/" })
  })
}
```


#### product.js
```javascript
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
```

LET'S UNDERSTAND THE CALLBACK TRICK IN THIS CODE - THE EASY WAY

In `product(s).js`, Max is calling `fetchAll()` passing a function definition as argument.

Check, what the function definition is, it accepts a parameter (i.e. `products`) and then send response, with status code and render the template using products (the value of a key in the object being passed in `render()`).

What goes along this definition is important, and that is the closure, the `res` function and the whole function chain. The code `res.status(200).render('shop', { products, docTitle: "Shop", path: "/" })` has many closures.

Finally, the function definition + closures gets executed inside the fetchAll() function. In other words, when this definition is called, either `callback(await JSON.parse(data))` OR `callback([])` i.e. products argument, is then used by that definition for response, status code and rendering the page.

Hope, I made this clearer to beginners. Closures are heavily used but spoken less often, in fact very rare.