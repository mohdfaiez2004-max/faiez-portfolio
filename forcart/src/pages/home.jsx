import { useState, useEffect} from "react";
import laptop from "../assets/laptop.jpg";
import game from "../assets/game.jpg";
import clothimg from "../assets/clothe.jpg";
import electronic from "../assets/electronic.jpg";
import samsungimg from "../assets/samsung.jpg";
import menShirtImg from "../assets/men.jpg";
import psImg from "../assets/ps.jpg";
import { Link } from "react-router-dom";

export default function Home({cart, setCart, search , setSearch, filteredProduct}){
     
   






    function addcart(product){
       const existingProduct = cart.find((item) => item.id === product.id);

       if(existingProduct){
         const updateCart =   cart.map((item) =>  {
          
            if(item.id === product.id){
                return{
                    ...item,
                    quantity: item.quantity + 1
                };
            }
            return item;
        });
        setCart(updateCart);
       }else{
        setCart([...cart,{...product, quantity: 1}]);
       }
    }
     

return(
    <div>
        
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-sky-50/20 to-white px-6 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl lg:leading-[1.15]">
              Discover Products That <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">Fit Your Lifestyle</span>.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-slate-600 leading-relaxed">
              From everyday essentials to premium gadgets, shop with ultimate confidence and lightning-fast worldwide delivery.
            </p>
            
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button className="rounded-xl bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-200 hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-200 hover:-translate-y-0.5 transition-all duration-200">
                Shop Now
              </button>
              <button className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors duration-200">
                Explore Categories
              </button>
            </div>

            {/* Feature Pills */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-600">
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-100">
                <span>🚚</span> Free Shipping
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-100">
                <span>🔒</span> Secure Payment
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-100">
                <span>↩️</span> Easy Returns
              </div>
            </div>

            {/* Hero Interactive Showcase Image */}
            <div className="mt-16 justify-center flex px-4">
              <div className="relative group max-w-3xl rounded-2xl p-2 bg-slate-100 shadow-2xl ring-1 ring-slate-900/5">
                <img 
                  src={laptop} 
                  alt="Premium Laptop"
                  className="rounded-xl object-cover w-full shadow-inner transition duration-500 group-hover:scale-[1.01]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="px-6 py-20 sm:px-8 border-t border-slate-100">
          <div className="text-center max-w-md mx-auto mb-14">
            <h2 className="text-xs font-bold uppercase tracking-widest text-sky-600">Curated Collections</h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">Shop by Category</p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Category Item 1 */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-slate-300">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Gear Up</span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">Get Your Game On</h3>
                <div className="my-4 aspect-[4/3] overflow-hidden rounded-xl bg-slate-50">
                  <img src={game} alt="Gaming" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
              </div>
              <a href="#" className="inline-flex items-center text-sm font-semibold text-sky-600 hover:text-sky-700">
                Explore Games <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Category Item 2 */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-slate-300">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Smart Tech</span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">Electronics</h3>
                <div className="my-4 aspect-[4/3] overflow-hidden rounded-xl bg-slate-50">
                  <img src={electronic} alt="Electronics" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
              </div>
              <a href="#" className="inline-flex items-center text-sm font-semibold text-sky-600 hover:text-sky-700">
                Explore Tech <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Category Item 3 */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-slate-300">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Lifestyle</span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">Apparel & Clothes</h3>
                <div className="my-4 aspect-[4/3] overflow-hidden rounded-xl bg-slate-50">
                  <img src={clothimg} alt="Clothes" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
              </div>
              <a href="#" className="inline-flex items-center text-sm font-semibold text-sky-600 hover:text-sky-700">
                Explore Fashion <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="px-6 py-20 sm:px-8 bg-slate-50/50 border-t border-slate-100">
          <div className="text-center max-w-md mx-auto mb-14">
            <h2 className="text-xs font-bold uppercase tracking-widest text-sky-600">Trending Right Now</h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">Your Favorite Products</p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Products Card  */}
           {filteredProduct.map((product) => {
             return(
               
               
                <div key={product.id} className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <Link to={`/product/${product.id}`}>
              <div className="p-4 bg-slate-50/50 flex justify-center items-center aspect-square overflow-hidden">
                <img
                    src={product.image}
                    alt={product.title}
                    className="pointer-events-none max-h-full object-contain transition duration-500 group-hover:scale-105 rounded-xl"
                  />
              </div>
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex-1">
                 
                  <h3 className="mt-1 text-lg font-bold text-slate-900">{product.title}</h3>
                
                    <p className="text-sky-600 font-bold text-lg mt-2">
                  ₹{Math.round(product.price * 94)}
                   </p>
                
                </div>
                
                <button onClick={() => addcart(product)} className="mt-6 w-full rounded-xl bg-sky-600 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 transition-colors active:scale-98">
                  Add to Cart
                </button>
              
            </div>
            </div>
               
             );
           })}
           

        
          </div>
        </section>
    </div>
      

);

}