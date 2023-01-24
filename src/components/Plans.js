import React, { useState, useEffect } from 'react'
import "./Plans.css"
import db from '../firebase';
import { collection, query, getDocs, where, getDoc, doc } from "firebase/firestore"; 
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import {  addDoc, onSnapshot } from 'firebase/firestore';
import { loadStripe } from "@stripe/stripe-js"


function Plans() {

    const [products , setProducts] = useState([]);

    const user = useSelector(selectUser);

    const [ subscription, setSubscription] = useState(null)


    useEffect(async() => {
        const colRef = collection(db, "users", user.uid, "subscriptions");
        const q = query(colRef);
        const qSnap = await getDocs(q);
        console.log(qSnap);
        // const docRef = getDoc(colRef);
    }, [])

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

    // console.log(products);

    const loadCheckout = async(priceId) => {
        const docRef =  await addDoc(collection(db,"customers",user.uid,"checkout_sessions"), {
            price: priceId,
            success_url: window.location.origin,
            cancel_url: window.location.origin,
          });
        onSnapshot(docRef, async(snap) => {
            const { error, sessionId } = snap.data();

            if(error){
                //show an error to your customer and
                // inspect your cloud function logs in the firebase console.
                alert(`An error ocurred: ${error.message}` );
            }
            if(sessionId){
                //we have a session , lets redirect to checkout
                // init stripe
                const stripe = await loadStripe('pk_test_51MTenuSB5JndFedGyRxF3pJgPpkPUbvhkmFfLhEAYoaZj8QJP6HtlaYnBVICCASTVY1RVt2NHY00KI3yHIiMUbp700z9cqjcHi')
                stripe.redirectToCheckout({ sessionId })
            }
        })
    }

  return (
    <div className='plans'>
        {
            //mapping over an object-- it gives back an array
            Object.entries(products).map((product) => {
                //add some logic to check if user subscription is active

                return (
                    <div className="plans__plan">
                        <div className="plans__info">
                            <h5>{product[1].name}</h5>
                            <h6>{product[1].description}</h6>
                        </div>
                        <button onClick={() => loadCheckout(product[1].prices.priceId)} className='plans__button'>
                            Subscribe
                        </button>
                    </div>
                );
            })
        }
    </div>
  )
}

export default Plans