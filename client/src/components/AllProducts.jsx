import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AllProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/products')
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h1>AllProducts</h1>
            {products &&
                products.map((product) => (
                    <p key={product._id}><Link to={`/products/${product._id}`} >{product.title}</Link></p>
                ))}
        </div>
    );
}

export default AllProducts;
