const { ProductModel } = require('../models/productModel');


const getAllProduct=async(req,res)=>{
    try {
        const products = await ProductModel.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getProduct=async(req,res)=>{
    const id = req.params.id;
    try {
        const product = await ProductModel.findById({ _id: id });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const addProduct=async(req,res)=>{
    try {
        const product=new ProductModel(req.body)
        await product.save()
        res.status(201).json({message:"New Product added successfully by Manager",product})
        
    }  catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const product=await ProductModel.findByIdAndUpdate({_id:id},req.body,{ new: true })
        res.status(200).json({message:"Product updated successfully by Manager",product})
    }  catch (error) {
        res.status(500).json({ error: error.message });
    }

}

const deleteProduct=async(req,res)=>{
    try {
        await ProductModel.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json({ message: 'Product deleted successfully by Manager' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports={
    getAllProduct,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}