import React, { useEffect, useState } from 'react';
import './Shop.css'
import fakeData from "../../fakeData"
import Product from '../product/Product';

const Shop = () => {
const first10=fakeData.slice(0,2)
    return (
       <div className="shop">
         <div className="product">
             {
                 first10.map(data=><Product Product={data}></Product>)
             }
            <Product></Product>
         </div>
         <div className="card">
           <h2>this is card</h2>
         </div>
       </div>
    );
};




export default Shop;