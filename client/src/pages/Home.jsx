import { useState } from 'react';
// import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios';



const Home = () => {
  const cartItem = [
    {
        id: 1,
        productName: "Wireless Mouse",
        price: 1200,
        quantity: 2
    },
    {
        id: 2,
        productName: "Mechanical Keyboard",
        price: 3500,
        quantity: 1
    },
    {
        id: 3,
        productName: "Gaming Headset",
        price: 5000,
        quantity: 1
    },
    {
        id: 4,
        productName: "Laptop Stand",
        price: 1500,
        quantity: 1
    },
    {
        id: 5,
        productName: "USB-C Hub",
        price: 2000,
        quantity: 2
    },
    {
        id: 6,
        productName: "External Hard Drive",
        price: 8000,
        quantity: 1
    },
    {
        id: 7,
        productName: "Smartphone Case",
        price: 500,
        quantity: 3
    },
    {
        id: 8,
        productName: "Portable Charger",
        price: 2500,
        quantity: 1
    },
    {
        id: 9,
        productName: "Bluetooth Speaker",
        price: 4500,
        quantity: 2
    },
    {
        id: 10,
        productName: "Fitness Band",
        price: 3000,
        quantity: 1
    }
];

const [item,setItem] = useState([...cartItem])


const payment =async ()=>{
  
 try {
  const stripe = await loadStripe('pk_test_51QZu2gCmSmq8pUXAHw37P08NHnWE27z0O4ooOSGHzJYMFuxbsnqvZG9OlEqOPyTGJ0bFA3FMS7rOGDzHBTF89DPr00X5EEPBI1');

  const response = await axios.post("http://localhost:3000/api/v1/check",{
     products : item
   })
   console.log(response.data.id);

   const results = stripe.redirectToCheckout({
     sessionId: response.data.id
   })

   console.log(results);
 } catch (error) {
  console.log(error);
  
 }
    
    
    
  }

  const increase = (index)=>{
    item[index].quantity += 1;
    setItem([...item])
  }

  
  const decrease = (index)=>{
    item[index].quantity -= 1;
    setItem([...item])
  }

  const deleteBtn = (index)=>{
    item.splice(index,1)
    setItem([...item])
  }


  
  
  return (
    <>
    <h1 style={{textAlign:"center"}}>Payment Integration</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' ,gap :"10px" }}>
    {item.map((item,index) => {
    return (
      <div key={item.id} style={{ margin: '10px' }}>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className="title">Name: {item.productName}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: {item.price  * item.quantity}</p>
            </div>
            <div className="flip-card-back">
           <div style={{margin:"5px"}}>
           <button onClick={()=>increase(index)}>
    +
    <div className="star-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        version="1.1"
        style={{
          shapeRendering: "geometricPrecision",
          textRendering: "geometricPrecision",
          imageRendering: "optimizeQuality",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }}
        viewBox="0 0 784.11 815.53"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs />
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer" />
          <path
            className="fil0"
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          />
        </g>
      </svg>
    </div>
    <div className="star-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        version="1.1"
        style={{
          shapeRendering: "geometricPrecision",
          textRendering: "geometricPrecision",
          imageRendering: "optimizeQuality",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }}
        viewBox="0 0 784.11 815.53"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs />
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer" />
          <path
            className="fil0"
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          />
        </g>
      </svg>
    </div>
    <div className="star-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        version="1.1"
        style={{
          shapeRendering: "geometricPrecision",
          textRendering: "geometricPrecision",
          imageRendering: "optimizeQuality",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }}
        viewBox="0 0 784.11 815.53"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs />
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer" />
          <path
            className="fil0"
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          />
        </g>
      </svg>
    </div>
    <div className="star-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        version="1.1"
        style={{
          shapeRendering: "geometricPrecision",
          textRendering: "geometricPrecision",
          imageRendering: "optimizeQuality",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }}
        viewBox="0 0 784.11 815.53"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs />
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer" />
          <path
            className="fil0"
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          />
        </g>
      </svg>
    </div>
    <div className="star-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        version="1.1"
        style={{
          shapeRendering: "geometricPrecision",
          textRendering: "geometricPrecision",
          imageRendering: "optimizeQuality",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }}
        viewBox="0 0 784.11 815.53"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs />
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer" />
          <path
            className="fil0"
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          />
        </g>
      </svg>
    </div>
    <div className="star-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        version="1.1"
        style={{
          shapeRendering: "geometricPrecision",
          textRendering: "geometricPrecision",
          imageRendering: "optimizeQuality",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }}
        viewBox="0 0 784.11 815.53"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs />
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer" />
          <path
            className="fil0"
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          />
        </g>
      </svg>
    </div>
            </button>
           </div>
           <div style={{margin:"5px"}}>
           <button  onClick={()=>decrease(index)}>
    -
    <div className="star-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        version="1.1"
        style={{
          shapeRendering: "geometricPrecision",
          textRendering: "geometricPrecision",
          imageRendering: "optimizeQuality",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }}
        viewBox="0 0 784.11 815.53"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs />
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer" />
          <path
            className="fil0"
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          />
        </g>
      </svg>
    </div>
    <div className="star-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        version="1.1"
        style={{
          shapeRendering: "geometricPrecision",
          textRendering: "geometricPrecision",
          imageRendering: "optimizeQuality",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }}
        viewBox="0 0 784.11 815.53"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs />
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer" />
          <path
            className="fil0"
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          />
        </g>
      </svg>
    </div>
    <div className="star-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        version="1.1"
        style={{
          shapeRendering: "geometricPrecision",
          textRendering: "geometricPrecision",
          imageRendering: "optimizeQuality",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }}
        viewBox="0 0 784.11 815.53"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs />
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer" />
          <path
            className="fil0"
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          />
        </g>
      </svg>
    </div>
    <div className="star-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        version="1.1"
        style={{
          shapeRendering: "geometricPrecision",
          textRendering: "geometricPrecision",
          imageRendering: "optimizeQuality",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }}
        viewBox="0 0 784.11 815.53"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs />
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer" />
          <path
            className="fil0"
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          />
        </g>
      </svg>
    </div>
    <div className="star-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        version="1.1"
        style={{
          shapeRendering: "geometricPrecision",
          textRendering: "geometricPrecision",
          imageRendering: "optimizeQuality",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }}
        viewBox="0 0 784.11 815.53"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs />
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer" />
          <path
            className="fil0"
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          />
        </g>
      </svg>
    </div>
    <div className="star-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        version="1.1"
        style={{
          shapeRendering: "geometricPrecision",
          textRendering: "geometricPrecision",
          imageRendering: "optimizeQuality",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }}
        viewBox="0 0 784.11 815.53"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs />
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer" />
          <path
            className="fil0"
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          />
        </g>
      </svg>
    </div>
          </button>
           </div>
          <div style={{margin:"20px"}} >
          <button onClick={()=>deleteBtn(index)} className="delete-button">
         <a>Delete</a>
         </button>
          </div>
            </div>
            
          </div>
        </div>
       
      </div>
    );
  })}
   </div>
  <div style={{display: "flex" ,justifyContent: "center", marginTop: "10px"}}>
  <button onClick={payment} className="btn">Payment Checked</button>
  </div>

    </>
  )
}

export default Home
