let btn = document.querySelector("#loadBtn");
let list = document.querySelector("#cryptoList");


async function getCrypto(){

 list.innerHTML = "Loading crypto prices...";
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";

    const res = await fetch(url);
    const dat = await res.json();

    
    dat.slice(0,100).map(coin => {
    const li = document.createElement("li");

    li.innerText = coin.name + " : $" + coin.current_price;

    list.appendChild(li);
});



}

btn.addEventListener("click", getCrypto);