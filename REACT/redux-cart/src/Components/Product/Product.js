import React from 'react';

const Product = (props) => {
    const {name,id}=props.product
    return (
        <div style={{border: "2px solid tomato"}}>
            <h5>Product name:-{name}</h5>
            <button>Add to cart</button>
        </div>
    );
};

export default Product;