import React, { useState, useEffect } from 'react'
import "./Plans.css"
import db from '../firebase';
import { collection, query, getDocs, where } from "firebase/firestore"; 

function Plans() {

    const [products , setProducts] = useState([]);

    useEffect(async() => {
        //getting reference to the collection "products"
        const productsRef = collection(db, "products");
        //creating query to get docs from product reference
        const q = query(productsRef, where("active", "==", true))
        //getting all the docs from above query
        const querySnapshot = await getDocs(q);
        //creating empty product object
        const products = {};
        querySnapshot.forEach(async(doc) => {
            // for all the docs received storing the data
            products[doc.id] = doc.data();
            //getting the prices collection in eact doc
            const priceSnap = await getDocs(collection(doc.ref,"prices"));
            //storing the prices data for each product
            priceSnap.forEach(price => {
                products[doc.id].prices = {
                    priceId: price.id,
                    priceData: price.data()
                } 
            })        
        }); 
        //finally setting the proucts state
        setProducts(products);
    }, [])

    console.log(products);

  return (
    <div className='plans'>
        
    </div>
  )
}

export default Plans