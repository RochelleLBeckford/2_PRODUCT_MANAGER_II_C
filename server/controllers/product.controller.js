const Product = require('../models/product.model');

const createProduct = (req, res) => {
    Product.create(req.body)
        .then((product) => res.status(201).json(product))
        .catch((err) => res.status(400).json(err));
};

const allProducts = (req, res) => {
    Product.find()
        .then((products) => res.status(200).json(products))
        .catch((err) => res.status(400).json(err));
};

const oneProduct = (req, res) => {
    const {id} = req.params;
    Product.findById(id)
        .then((product) => res.status(200).json(product))
        .catch((err) => res.status(400).json(err));
};

const updateProduct = (req, res) => {
    const {id} = req.params;
    Product.findByIdAndUpdate(id, req.body, {new: true, runValidators: true})
        .then((product) => res.status(200).json(product))
        .catch((err) => res.status(400).json(err));
};

const deleteProduct = (req, res) => {
    const {id} = req.params;
    Product.findByIdAndDelete(id)
        .then((product) => res.status(200).json(product))
        .catch((err) => res.status(400).json(err));
};


module.exports = { createProduct, allProducts, oneProduct, updateProduct, deleteProduct};
