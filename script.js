let input = document.querySelector("#input");
let btn = document.querySelector("#showbtn");
let output = document.querySelector("#output");
let list = document.querySelector("#list");
let summury = document.querySelector("#summary")
let resetbtn = document.querySelector("#resetbtn")
let total = 0;
let positive = 0;
let nagative = 0;
let zero = 0;
let sum =0;
btn.addEventListener("click", function(){
   
  let number = Number(input.value);
  if(number > 0){
    output.innerHTML = "positve: " + number;
  }else if(number < 0){
    output.innerHTML = "nagitive:" + number;

   }else{
    output.innerHTML = "zero";
   };
   if(input.value === ""){
    output.innerText = "please enter a number";
    return;
   }
   total++;
   sum += number;
   if(number > 0){
    positive++;
   

   }else if(number < 0){
    nagative++;
 
   }else{
    zero++;
   
   };

   summury.innerText = 'total: ' + total +' | positve: ' + positive + ' | nagative: ' + nagative + " | zero: " + zero + " | sum: " + sum;
   let li = document.createElement('li');
   li.innerText = output.innerText;
  
   list.appendChild(li);

   let deletebtn = document.createElement("button");
   deletebtn.innerText = "delete";
   li.appendChild(deletebtn);
    if(number > 0){
    positive++;
    li.classList.add("positive")
   }else if(number < 0){
    nagative++;
    li.classList.add('negative')
   }else{
    zero++;
    li.classList.add("zero")
   }

   list.appendChild(li);

   deletebtn.addEventListener("click",function(){
    li.remove();
   })
   input.value = "";

});
   resetbtn.addEventListener("click", function(){
   
   list.innerHTML = "";
   total = 0 ;
   positive = 0 ;
   nagative = 0 ;
   zero = 0 ;
   sum = 0;
   summury.innerText = " total: " + total +  ' positive: ' +  positve  + ' nagative: ' +  nagative + ' zero: ' +  zero + ' sum: '  + sum;
   output.innerText = "";
});
