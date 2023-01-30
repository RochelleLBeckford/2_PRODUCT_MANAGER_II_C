import React, { useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';



function EditProduct() {
    const navigate = useNavigate();

    const {id} = useParams()

    const [productForm, setProductForm] = useState({
        title: '',
        price: '',
        description: '',
    });

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProductForm(res.data))
            .catch(err => console.log(err));
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, productForm)
        .then(() => navigate(`/products/${id}`))
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
            <h1>Edit Product</h1>

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
                        Edit Product
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditProduct;