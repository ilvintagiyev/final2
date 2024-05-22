const express = require('express')
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
const port = 8585

app.use(cors())
app.use(express.json())


const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String
  });

  const ProductsModel = mongoose.model("products",ProductSchema)


app.get('/ilvin', async(req, res) => {
      const products = await ProductsModel.find()
      res.send(products)
  })
  
  app.post('/ilvin', async(req, res) => {
    const data = req.body
    const products = new ProductsModel(data)
    await products.save()
    res.send(products)
  })
  
  
  app.delete('/ilvin/:id', async(req, res) => {
    const {id} = req.params
    const data = req.body
    const products =  await ProductsModel.findByIdAndDelete(id,data)
    res.send(products) 
  })


  mongoose.connect('mongodb+srv://ilvin88:ilvin88@cluster0.2mgcc5x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})