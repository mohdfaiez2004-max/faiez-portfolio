import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


export default function Product({cart,setCart}) {
  const[product,setProduct] = useState({});
 const {id} = useParams();
useEffect(() => {
 async function getProduct() {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const dta = await response.json();
    setProduct(dta)
 }
 getProduct();
}, [id]);

function addToCart(){
  const existingProduct = cart.find((item) => item.id === product.id);
  if(existingProduct){
   const update = cart.map((item) => {
      if(item.id === product.id){
        return{
          ...item,
          quantity: item.quantity + 1
        };
      }
      return item;
    });
   setCart(update);

  }else{
    setCart([...cart,{...product, quantity: 1}]);
  }
}
  return (
    <div className="min-h-screen w-screen bg-amber-50 flex justify-center items-center">
           <div className="bg-sky-50 mx-auto min-h-[400px] w-full max-w-5xl rounded-2xl border-2 border-slate-800 flex items-center justify-between flex-col lg:flex-row">
            <div className="w-full lg:w-[35%] border-b-2 lg:border-b-0 lg:border-r-2 border-slate-800 h-full flex  items-center justify-center">
              <img src={product.image} alt={product.title} className="h-72 w-full object-contain p-8" />
            </div>
            <div className="w-full lg:w-[65%] flex flex-col p-8">
                <h2 className="font-bold text-2xl text-slate-900 flex flex-wrap">{product.title}</h2>
                <p className="py-2 leading-relaxed text-slate-600 flex flex-wrap">{product.description}</p>
                <p className="py-2 text-xl font-bold text-sky-600"><span className="text-slate-800">Price:</span> ₹{Math.round(product.price * 94)}/-</p>
                <p className="py-2 font-bold text-xl"><span className="text-slate-800">Rating:</span> ⭐ {product.rating?.rate} ({product.rating?.count} reviews)</p>
                <div className="pt-6">
              <button onClick={addToCart} className="cursor-pointer py-4 w-full bg-sky-600 rounded-xl text-white hover:bg-sky-800 transition">
              Add to Cart
            </button>
            </div>
            </div>
            
           </div>
    </div>
  );
}