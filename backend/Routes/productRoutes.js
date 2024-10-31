const express = require('express');
const router=express.Router();
const Product = require('../models/Product');
//Display all the products : using GET with /
router.get('/',async (req,res)=>{
    try {
    const products = await Product.find({});
    res.json(products);
    } catch (error) {
        res.json(400).json({error : "There are no products to display"});
    }
});
//Add a product into the database : using POST with /
router.post('/',async (req,res)=>{
try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(200).json(newProduct);
} catch (error) {
    res.status(400).json({error:error.message});
}
});
//Delete a product using the product Id from the database : Using DELETE 
router.delete('/:productId',async (req,res)=>{
    try {
        const prod = await Product.findOneAndDelete({productId:req.params.ProductID});
        if(!prod){
            return res.status(404).json({error:"Product not found"});
        }
        res.json({message : "Product Deleted successfully"});
    } catch (error) {
        res.status(400).json({error:error.message});
    }
});
//Search a Product using the product ID : POST 
router.get('/:productId',async (req,res)=>{
try {
    const prod = await Product.findOne({ProductID: req.params.productId  });
    if(!prod){
        res.status(404).json({error : "Product does not exist"});
    }
    res.json(prod);
} catch (error) {
    res.status(400).json({error:error.message});
}
});
module.exports = router;
