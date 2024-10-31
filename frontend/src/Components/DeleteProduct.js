import React, { useState } from "react";

const DeleteProduct = ()=>{
    const [productId,setProductId] = useState('');
    const [message,setMessage] = useState('');
    const handleDelete = async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/products/${productId}`,{
                method:'DELETE'
            });
            const data = await response.json();
            setMessage(data.error||data.message);
            if(response.ok){
                setProductId('');
            }
        } catch (error) {
            setMessage('Product Does not exist');
        }
    };
    return(
        <div>
            <h1>Delete Product</h1>
            <form onSubmit={handleDelete}>
                <div>
                    <label>Enter ProductID : </label>
                    <input type='text' value={productId} onChange={(e)=>setProductId(e.target.value)} placeholder="Enter Product ID"></input>
                </div>
                <button type="submit">Delete Product</button>
            </form>
           {message && <p>{message}</p>}
        </div>
    )
}

export default DeleteProduct;