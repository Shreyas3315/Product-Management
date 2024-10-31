import React, { useEffect, useState } from "react";

const DisplayProduct = ()=>{
    const [products,setProducts] = useState([]);
    const [error,setError] = useState('');
    useEffect(()=>{
        const fetchProducts = async ()=>{
            try {
                const response = await fetch('http://localhost:5000/api/products',{
                    method:'GET'
                })
                const data = await response.json();
                if(response.ok){
                    setProducts(data);
                }
                else{
                    setError(data.error);
                }
            } catch (error) {
                setError('No products to fetch');
            }
        };
        fetchProducts();
    })
    return(
        <div>
            <h1>All Products</h1>
            {error && <p>{error}</p>}
            {products.map((product)=>(
                <div key={product.ProductID}>
                    <h2>{product.ProductName}</h2>
                    <p>Product ID : {product.ProductID}</p>
                    <p>Price : {product.Price}</p>
                    <p>Category : {product.Category}</p>
                    <p>Stock : {product.Stock}</p>
                </div>
            ))}
        </div>
    )
}

export default DisplayProduct;