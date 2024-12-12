const numbers = document.querySelector(".numbers");
const base = document.querySelector("div");

document.addEventListener("DOMContentLoaded", function(){
   createNumpad(); 
})

function createNumpad(){
    for(i = 0; i < 10; i++){
        let num = document.createElement("div");
        num.classList.add("num")
        let dimensions = 500/10;
        num.style.height = `${dimensions}px`;
        num.style.width = `${dimensions}px`;
        if (i == 9){
            num.textContent = "0";
        }else{
            num.textContent = `${i+1}`;
        }
        numbers.appendChild(num);
    }
}

function createOperators (){
    
}