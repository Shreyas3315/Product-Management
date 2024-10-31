import React, { useState } from "react";
const SearchProduct = ()=>{
    const [productId,setProductId] = useState('');
    const [product,setProduct] = useState(null);
    const [error,setError] = useState('');
    const handleSearch = async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/products/${productId}`);
            const data = await response.json();
            if(response.ok){
                setProduct(data);
                setError('');
            }
            else{
                setProduct(null);
                setError(data.error);
            }
        } catch (error) {
            setError('Product not found');
        }
    }
    return(
        <div>
            <h1>Search Product</h1>
            <form onSubmit={handleSearch}>
                <div>
                    <label>Product ID : </label>
                    <input type="text" value={productId} onChange={(e)=>{setProductId(e.target.value)}} required></input>
                </div>
                <button type='submit'>Search</button>
            </form>
            {error&&<p>{error}</p>}
            {product && (
                <div>
                    <h2>{product.ProductName}</h2>
                    <p>Product ID : {product.ProductID}</p>
                    <p>Price : {product.Price}</p>
                    <p>Category : {product.Category}</p>
                    <p>Stock : {product.Stock}</p>
                </div>
            )}
        </div>
        
    );
}

export default SearchProduct;