import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

import Home from "./pages/Home";
import Cart from "./pages/cart";
import Product from "./pages/Product";

export default function App() {
  const[products,setProducts] = useState([]);
  const[error,seterror] = useState("")
  
     useEffect(() => {
       async function api() {
     try{
         const res = await fetch("https://fakestoreapi.com/products");
        const Data = await res.json();

       setProducts(Data); 

     }catch(err){
      console.log("api can't work properly:",err);
      seterror('there is an error')
      
     }
       }
       api();
     },[]);

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });
  const[search,setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  
     const filteredProduct = products.filter((product) => {
      if(search === ""){
         return true;
      }else{
        return product.title.toLowerCase().includes(search.toLowerCase());
      }
     });

  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-slate-50 text-slate-800 antialiased selection:bg-sky-500 selection:text-white">
        <div className="mx-auto max-w-full bg-white shadow-sm ring-1 ring-slate-100">
          <Navbar cart={cart} search={search} setSearch={setSearch}  filteredProduct ={filteredProduct}/>

          <Routes>
            <Route
              path="/"
              element={<Home cart={cart} setCart={setCart} search={search} setSearch={setSearch}  filteredProduct={filteredProduct}/>}
            />
            

            <Route
              path="/cart"
              element={ <Cart cart={cart} setCart={setCart}/>}
            />

            <Route
              path="/product/:id"
              element={<Product cart={cart} setCart={setCart} />}
            />
          </Routes>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}