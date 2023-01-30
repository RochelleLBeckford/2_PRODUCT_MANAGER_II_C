import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function AddProduct() {
    const navigate = useNavigate();

    const [productForm, setProductForm] = useState({
        title: '', 
        price: '',
        description: '',
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', productForm)
        .then(() => navigate('/products'))
        .catch(err => console.log(err));
    };
    

    const handleChange = (e) => { 
        setProductForm({
            ...productForm,
            [e.target.name]: e.target.value
        })    
    }

    return (
        <div>
            <h1>Add a New Product</h1>

            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="form-control"
                        value={productForm.title}
                        onChange={ handleChange }
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">
                        Price
                    </label>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        className="form-control"
                        value={productForm.price}
                        onChange={ handleChange }
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        className="form-control"
                        value={productForm.description}
                        onChange={ handleChange }
                    ></textarea>
                </div>
                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary">
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddProduct;
