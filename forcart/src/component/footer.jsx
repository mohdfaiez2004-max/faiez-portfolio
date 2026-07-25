import { useState } from "react";

export default function Footer(){


  return(
    <div>
         {/* Global Footer */}
        <footer className="bg-slate-900 text-slate-400 px-6 py-12 sm:px-8 border-t border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-b border-slate-800 pb-8">
            
            {/* Branding Column */}
            <div className="text-center md:text-left">
              <a href="#" className="text-xl font-black tracking-tight text-white">
                <span className="text-sky-500">F</span>orcart
              </a>
              <p className="mt-2 text-xs text-slate-500 max-w-xs mx-auto md:mx-0">
                Premium user interfaces, stellar checkout workflows, and modern aesthetics.
              </p>
            </div>

            {/* Links Column */}
            <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Categories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>

            {/* Empty right area for structure or newsletter placement later */}
            <div className="text-center md:text-right text-xs text-slate-500">
              Designed dynamically for speed and clean scaling.
            </div>
          </div>
          
          <p className="mt-8 text-center text-xs text-slate-600 font-medium">
            &copy; 2026 Forcart Inc. All rights reserved.
          </p>
        </footer>
    </div>
  );  
}