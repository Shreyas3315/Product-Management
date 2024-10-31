import React, { useState } from "react";

const AddProduct = ()=>{
    const [product,setProduct] = useState({
        ProductName:'',
        ProductID:'',
        Price:'',
        Category : '',
        Stock:''
    });
    const [message,setMessage] = useState('');
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/products',{
                method : 'POST',
                headers:{
                    'Content-Type':'application/json',
                },
            body : JSON.stringify(product),
        });
        const data = await response.json();
        if(response.ok){
            setMessage('Product added Successfully');
            setProduct({
                ProductName:'',
                ProductID:'',
                Price:'',
                Category : '',
                Stock:''
            })
        }
        else 
        setMessage(data.error);
        } catch (error) {
            setMessage('Product could not be added');
        }   
    }
    return (
        <div>
            <h1>Add a Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Product Name : </label>
                    <input type ="text" value={product.ProductName} 
                    onChange={(e)=>setProduct({...product,ProductName:e.target.value})} required>
                    </input>
                </div>
                <div>
                    <label>Product ID : </label>
                    <input type ="text" value={product.ProductID}
                    onChange={(e)=>setProduct({...product,ProductID:e.target.value})} required></input>
                </div>
                <div>
                    <label>Price : </label>
                    <input type ="number" value={product.Price} 
                    onChange={(e)=>setProduct({...product,Price:e.target.value})} required></input>
                </div>
                <div>
                    <label>Category : </label>
                    <input type ="text" value={product.Category} 
                    onChange={(e)=>setProduct({...product,Category:e.target.value})} required></input>
                </div>
                <div>
                    <label>Stock : </label>
                    <input type ="number" value={product.Stock}
                    onChange={(e)=>setProduct({...product,Stock:e.target.value})} required></input>
                </div>
                <button type="submit">Add Product</button>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default AddProduct;