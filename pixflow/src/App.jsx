import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  async function Generate() {
    if (!input.trim()) return;
    
    setLoading(true);
    setError("");
    
    try {
      const APIkey = import.meta.env.VITE_GEMINI_KEY;
      
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${APIkey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{
              parts: [{
                // 💡 Prompt Updated: Ab Gemini chhota aur valid inline HTML bhejega!
                text: `Be the best UI designer in the world. Generate 3 modern web design concepts for: ${input}. 
                For each concept, return a JSON array containing objects with EXACTLY these fields: 'title', 'description', and 'html_code'. 
                The 'html_code' field must contain a fully styled inline HTML snippet (like a premium component/hero section with nice colors). 
                Keep the code under 20 lines. Do not wrap the response in markdown backticks. Return ONLY the raw valid JSON array.`
              }]
            }]
          })
        }
      );

      const data = await res.json();
      let text = data.candidates[0].content.parts[0].text; 
      text = text.replace(/```json|```/g, "").trim(); 
      
      const design = JSON.parse(text); 
      setItems(design); 
      
    } catch (err) {
      console.error(err);
      setError("Dhatt teri ki! Data parse nahi ho paya. Ek baar phir try karo.");
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Navbar Section */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-xl">
              Pixflow
            </span>
            <span className="text-xs bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">v1.0</span>
          </div>
          <nav>
            <a href="#" className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition">
              Settings
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Headline */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-4">
            AI Web Design Generator
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Type your brand idea and watch Gemini craft 3 tailored user experience structures instantly.
          </p>
        </div>

        {/* Input & Search Group */}
        <div className="bg-white p-4 rounded-2xl shadow-md border border-slate-200 flex flex-col sm:flex-row gap-3 mb-8 max-w-4xl mx-auto">
          <input 
            type="text" 
            value={input} 
            placeholder="e.g., Cyberpunk Gym, Minimalist Bakery, Organic Tea Shop..." 
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-500 focus:bg-white transition text-base"
          />
          <button 
            onClick={Generate} 
            disabled={loading}
            className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold px-6 py-3 rounded-xl transition shadow-sm shadow-indigo-200 flex items-center justify-center min-w-[120px]"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Thinking...
              </span>
            ) : "Generate"}
          </button>
        </div>

        {/* Error Notification */}
        {error && (
          <div className="bg-red-50 text-red-700 border border-red-200 p-4 rounded-xl text-center font-medium mb-6 max-w-4xl mx-auto animate-pulse">
            {error}
          </div>
        )}

        {/* Results Grid Layout */}
        {items.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {items.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 p-5 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header Tag */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 font-black flex items-center justify-center text-xs">
                      0{index + 1}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-500">
                      Live Preview
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4 min-h-[48px]">
                    {item.description}
                  </p>

                  {/* 🎨 Styled Modern iFrame Container */}
                  <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-inner bg-slate-50 p-1">
                    {/* Top window bar simulation */}
                    <div className="flex items-center gap-1.5 px-2 py-1.5 bg-slate-100 border-b border-slate-200/60 rounded-t-lg">
                      <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                      <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                      <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    </div>
                    
                    {/* The Actual iFrame */}
                    <iframe 
                      srcDoc={item.html_code} 
                      title={item.title}
                      className="w-full h-44 bg-white rounded-b-lg block border-none"
                      sandbox="allow-scripts" // Security check
                    />
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex gap-2">
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(item.html_code);
                      alert("Code clipboard par copy ho gaya! 📋");
                    }}
                    className="flex-1 text-center bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600 text-slate-600 font-semibold text-xs py-2.5 rounded-xl transition border border-slate-100"
                  >
                    Copy HTML
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App