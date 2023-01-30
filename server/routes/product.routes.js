const express = require('express');

const productRouter = express.Router();
const {
    createProduct,
    allProducts,
    oneProduct,
    deleteProduct,
    updateProduct,
} = require('../controllers/product.controller');

productRouter.route('/').get(allProducts).post(createProduct);

productRouter.route('/:id').get(oneProduct).put(updateProduct).delete(deleteProduct);

module.exports = productRouter;
