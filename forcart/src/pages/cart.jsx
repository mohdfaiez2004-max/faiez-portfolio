import Home from "./home";

export default function Cart({ cart, setCart }) {

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center">
        <div className="text-6xl">🛒</div>
        <h1 className="text-2xl font-bold text-slate-800">Your cart is empty</h1>
        <p className="text-slate-500">Looks like you haven't added any items yet.</p>
      </div>
    );
  }

  function removeItem(id) {
    const product = cart.find((item) => item.id === id);

    if (product.quantity === 1) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(
        cart.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        })
      );
    }
  }

  function addItem(id) {
    const add = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1
        };
      }
      return item;
    })
    setCart(add);
  }

  const total = cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8">
          Your Shopping Cart ({cart.length})
        </h2>

        {/* Main Grid: Left side Cart items, Right side Summary */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* LEFT SIDE: CART ITEMS */}
          <div className="w-full lg:w-[65%] flex flex-col gap-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col sm:flex-row items-center gap-6 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Product Image Container */}
                <div className="w-28 h-28 p-3 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 overflow-hidden border border-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Title & Price Info */}
                <div className="flex-1 flex flex-col gap-1 text-center sm:text-left">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    Unit Price: ₹{Math.round(item.price * 94)}
                  </p>
                  <p className="text-sky-600 font-extrabold text-lg sm:text-xl mt-1">
                    ₹{Math.round(item.price * 94 * item.quantity)}
                  </p>
                </div>

                {/* Quantity Buttons Block */}
                <div className="flex items-center gap-3 bg-slate-100 border border-slate-200 rounded-xl px-3 py-1.5 shadow-inner">
                  <button
                    className="w-7 h-7 flex items-center justify-center font-extrabold text-slate-700 hover:text-sky-600 hover:bg-white rounded-lg transition cursor-pointer"
                    onClick={() => removeItem(item.id)}
                  >
                    -
                  </button>

                  <span className="font-bold text-slate-900 text-sm min-w-[20px] text-center">
                    {item.quantity}
                  </span>

                  <button
                    className=""
                    onClick={() => addItem(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: ORDER SUMMARY */}
          <div className="w-full lg:w-[35%] lg:sticky lg:top-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col gap-5">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                Order Summary
              </h3>

              <div className="flex flex-col gap-3 text-sm text-slate-600 font-medium">
                <div className="flex justify-between items-center">
                  <span>Subtotal</span>
                  <span className="text-slate-900 font-bold">₹{Math.round(total * 94)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Estimated Shipping</span>
                  <span className="text-emerald-600 font-bold">FREE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Taxes</span>
                  <span className="text-slate-400 text-xs">(Calculated at checkout)</span>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4 flex justify-between items-center">
                <span className="text-base font-bold text-slate-900">Total Amount</span>
                <span className="text-2xl font-black text-sky-600">
                  ₹{Math.round(total * 94)}
                </span>
              </div>

              <button className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-sky-500/20 active:scale-[0.98] cursor-pointer">
                Proceed to Checkout
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}