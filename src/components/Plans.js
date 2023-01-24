import React, { useState, useEffect } from 'react'
import "./Plans.css"
import db from '../firebase';
import { collection, query, getDocs, where, getDoc,doc  } from "firebase/firestore"; 

function Plans() {

    const [products , setProducts] = useState([]);

    useEffect(async() => {
        const productsRef = collection(db, "products");
        const q = query(productsRef, where("active", "==", true))
        const querySnapshot = await getDocs(q);
        const products = {};
        querySnapshot.forEach(async(doc) => {
            products[doc.id] = doc.data();
            const priceSnap = await getDocs(collection(doc.ref,"prices"));
            priceSnap.forEach(price => {
                products[doc.id].prices = {
                    priceId: price.id,
                    priceData: price.data()
                } 
            })        
        }); 
        setProducts(products);
    }, [])

    console.log(products);

  return (
    <div className='plans'>
        
    </div>
  )
}

export default Plans