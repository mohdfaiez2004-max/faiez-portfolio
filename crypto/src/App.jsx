import { useState } from "react";

const initialCoins = [
  { id: 1, name: "Bitcoin", symbol: "BTC", price: 65000, holding: 0.5 },
  { id: 2, name: "Ethereum", symbol: "ETH", price: 3500, holding: 2 },
  { id: 3, name: "Solana", symbol: "SOL", price: 140, holding: 10 }
];
export default function app(){
  const [coins,setCoins] = useState(initialCoins);
  const [input, setInput] = useState("");

  function handle(id){
     const updatecoins = coins.map((coin) => {
       if(coin.id === id){
        return{ ...coin , holding: coin.holding + 1};
       }
       return coin;
     })
    setCoins(updatecoins); 
  }
  
  return(
    <div>
      <div className="">
        <h1>crypto price traker</h1>

        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="type your crypto"/>
      </div>

      <div className="">
        {coins.filter((coin) => 
         coin.name.toLowerCase().includes(input.toLowerCase()))
         .map((coin) => {
         return(
          <div key={coin.id}>
           <h3>{coin.name} ({coin.symbol})</h3>
           <p>{coin.price}</p>
           <p>{coin.holding}</p>
           <p>Total-value: ${coin.price * coin.holding}</p>
           <button onClick={() => handle(coin.id)}>+ buy 1 more</button>
         </div>
         )
         })
       }
      </div>

      
    </div>
  );

}
