import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function OneProduct() {
    const { id } = useParams();

    const navigate = useNavigate();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    const handleDelete = (id) => {
        axios
            .delete(`http://localhost:8000/api/products/${id}`)
            .then(() => navigate('/products'))
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h1>Product Details</h1>
            {product && (
                <div className="card">
                    <div className="card-body">
                        <h5>{product.title}</h5>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                    </div>
                    <div className="card-footer d-flex justify-content-end gap-2">
                        <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(product._id)}>
                            Delete
                        </button>
                        <button
                            className="btn btn-warning"
                            onClick={() => navigate(`/products/${product._id}/edit`)}>
                            Edit Product
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default OneProduct;
