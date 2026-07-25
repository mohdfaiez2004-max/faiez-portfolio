import { useState } from "react";
import { Link } from "react-router-dom";
import Product from "../pages/Product";

export default function Navbar({ cart, search, setSearch, filteredProduct}) {
  // Search bar expand hua hai ya nahi, uski state
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div>
      {/* Top Header & Branding */}
      <header className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50 transition-all">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-6 sm:px-8">
          
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-1.5 text-2xl font-black tracking-tight text-slate-900 group shrink-0"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-white shadow-md shadow-sky-200 transition-transform group-hover:scale-105 duration-300">
              F
            </span>
            <span>orcart</span>
          </Link>

          {/* Desktop Navigation (Jab Search Open hoga tab ye HIDE ho jayega) */}
          {!isSearchOpen && (
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600 transition-all duration-300">
              <Link
                to="/"
                className="text-sky-600 relative after:absolute after:bottom-[-26px] after:left-0 after:h-[2px] after:w-full after:bg-sky-600"
              >
                home
              </Link>
              <Link
                to="/product/:id"
                className="hover:text-sky-600 transition-colors duration-200"
              >
                Products
              </Link>
              <Link
                to=""
                className="hover:text-sky-600 transition-colors duration-200"
              >
                Categories
              </Link>
              <Link
                to=""
                className="hover:text-sky-600 transition-colors duration-200"
              >
                Contact
              </Link>
            </nav>
          )}

          {/* Search & Actions Container */}
          <div
            className={`flex items-center gap-4 transition-all duration-300 ${
              isSearchOpen ? "flex-1" : ""
            }`}
          >
            {/* Expandable Search Bar */}
            <div
              className={`relative flex items-center rounded-xl bg-slate-50 p-1 ring-1 ring-slate-200 focus-within:ring-2 focus-within:ring-sky-500 transition-all duration-300 ${
                isSearchOpen ? "w-full" : "hidden sm:flex w-56"
              }`}
             >
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onFocus={() => setIsSearchOpen(true)} // Click hone par expand
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent px-3 py-1.5 text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
             {search !== "" && (
                <div className="absolute left-0 top-[110%] w-full rounded-2xl bg-white p-2 shadow-xl border border-slate-100 z-50 max-h-60 overflow-y-auto">
                {filteredProduct.length > 0 ? (
                   filteredProduct.map((product) => {
                    return(
                  <Link to={`/product/${product.id}`} key={product.id} onClick={() => {setSearch(""); setIsSearchOpen(false);}}>
                  <div  className="flex flex-row px-3 py-2 rounded-lg  cursor-pointer hover:bg-slate-100">
                    <p>{product.title}</p>
                  </div>
                  </Link>
                );
               })
              ):(
                <p>no product found</p>
              )}
              </div>
             )}

              <button className="rounded-lg bg-sky-600 px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-sky-500 transition-colors duration-200 cursor-pointer shrink-0">
                Search
              </button>

              {/* Close Button (Jab Search Open ho tab dikhega) */}
              {isSearchOpen && (
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="ml-1 px-2 py-1 text-slate-400 hover:text-slate-600 font-bold text-sm cursor-pointer shrink-0"
                  title="Close search"
                >
                  ✕
                </button>
              )}
              
            </div>
            

            {/* Cart Button */}
            <button className="px-5 py-2.5 text-sm font-semibold text-white bg-red-500 rounded-xl hover:bg-red-800 transition cursor-pointer shrink-0">
              <Link to="/cart">cart ({cart.length})</Link>
            </button>

            {/* Sign In Button */}
            <button className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer shrink-0">
              Sign In
            </button>
          </div>
        </div>

        {/* Mobile Quick Links Bar */}
        <div className="flex items-center justify-around py-3 border-t border-slate-100 bg-slate-50/50 text-xs font-semibold text-slate-600 lg:hidden">
          <Link
            to="/"
            className="text-sky-600 relative after:absolute after:bottom-[-12px] after:left-0 after:h-[2px] after:w-full after:bg-sky-600"
          >
            home
          </Link>
          <Link
            to=""
            className="hover:text-sky-600 transition-colors duration-200"
          >
            Products
          </Link>
          <Link
            to=""
            className="hover:text-sky-600 transition-colors duration-200"
          >
            Categories
          </Link>
          <Link
            to=""
            className="hover:text-sky-600 transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </header>
    </div>
  );
}