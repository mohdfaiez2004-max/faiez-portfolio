let btn = document.querySelector('#Btn');
let cityinput = document.querySelector('#city');
let result = document.querySelector("#weatherResult");

async function getweather(city){
    if(!city){
        result.innerText = "please enter a city";
        return
    }

    try{
        result.innerHTML = "laoding weather info..."

        const apikey = "71996c1725629d4610fcdf8c836a168a";

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

        const res = await fetch(url);

        const data = await res.json();

          if(data.cod !== 200){
            result.innerText = "city not found";
            return;
        }

        const weatherType = data.weather[0].main;
        if(weatherType === "Clear"){
    document.body.style.background = "#f7d358";
   }
   else if(weatherType === "Clouds"){
    document.body.style.background = "#cfd8dc";
   }
   else if(weatherType === "Rain"){
    document.body.style.background = "#607d8b";
   }   
   else{
    document.body.style.background = "#90caf9";
   }

       const icon = data.weather[0].icon;

    result.innerHTML = `
    <h3>${data.name}</h3>
    <img src="https://openweathermap.org/img/wn/${icon}@2x.png">
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Weather: ${data.weather[0].description}</p>
    `;
      
    }catch(error){

        result.innerText = "Something went wrong";

    };

};
btn.addEventListener("click",()=>{
const City = cityinput.value;
getweather(City);

});

cityinput.addEventListener("keypress", (e) => {
    
 if(e.key === "Enter"){
      
const City = cityinput.value;
getweather(City);

 }


});


