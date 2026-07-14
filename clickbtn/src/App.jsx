import React from "react";
import { useState } from "react";
const App = () => {
  const[input,setinput] = useState("");
  const [mood,setmood] = useState("");
  const [count,setcount] = useState(0);
  

  const countfunc = () => {
      if(input.trim() === ""){
        alert("type something!");
        return;
      }
      const wordsArray = input.trim().split(/\s+/);
      setcount(wordsArray.length)


      const lowerText = input.toLowerCase();

  if (lowerText.includes("happy") || lowerText.includes("code")) {
    setmood("Positive 😊");
  } else if (lowerText.includes("sad") || lowerText.includes("exam")) {
    setmood("Stressed 😩");
  } else {
    setmood("Neutral 😐");
  }
 };

 return(
  <div>
   <div>
     <input type="text" value={input} onChange={(e) => setinput(e.target.value)} />
     <button onClick={countfunc}>analyze</button>
   </div>
   <div>
    <h3>totalwords:{count}</h3>
    <h3>Mood:{mood}</h3>
   </div>

  </div>

 )

}

export default App;