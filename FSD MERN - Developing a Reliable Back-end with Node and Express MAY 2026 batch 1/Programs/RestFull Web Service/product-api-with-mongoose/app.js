let express = require('express');
let mongoose = require('mongoose');

let app = express();
let URL = 'mongodb://localhost:27017/express_db1';
app.use(express.json());

async function connectToDatabase() {
    try {
        await mongoose.connect(URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToDatabase();

// creating schema 
// let productSchema = new mongoose.Schema({
//     _id:Number,
//     name:String,
//     price:Number
// });

// creating schema with validation
let productSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
        min: 1,
        max: 1000
    },
    pname:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    price: {
        type: Number,
        required: true,
        min: 10000,
        max: 1000000
    }
});
// using schema we need to create model which help to interact with db. 
// 1st parameter collection name, 2nd parameter schema name
let ProductModel = mongoose.model('products', productSchema);


// store product information 
app.post("/api/storeProduct",async (req, res) => {
    try {
        let productData = req.body;
        // data received from client is in json format, we need to convert it into model object and then save it to db.
        let product = new ProductModel(productData);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// find all products 
app.get("/api/findProducts", async (req, res) => {
    try {
        let products = await ProductModel.find();
        res.status(200).json(products);
    } catch (error) {       
         res.status(500).json({ error: error.message });
    }       
})


app.listen(3000, () => console.log('Server is running on port 3000'));