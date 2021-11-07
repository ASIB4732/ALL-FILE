import React from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const product=[
        {name:'lanovo Laptop', id:1},
        {name:'asus Laptop', id:2},
        {name:'HP Laptop', id:3},
        {name:'Wallton Laptop', id:4},
        {name:'Appele Laptop', id:5},
    ]
    return (
        <div>
            <h4>This is shop</h4>
            {
                product.map(data=><Product product={data}></Product>)
            }
        </div>
    );
};

export default Shop;