const numbers = document.querySelector(".numbers");
const base = document.querySelector("div");
const operators = document.querySelector(".operators");

document.addEventListener("DOMContentLoaded", function(){
   createNumpad();
   createOperators();
   pressedNumpad();
})

function createNumpad(){
    for(i = 0; i < 10; i++){
        let num = document.createElement("button");
        num.classList.add("num");
        let dimensions = 500/10;
        num.style.height = `${dimensions}px`;
        num.style.width = `${dimensions}px`;
        if (i == 9){
            num.id = "0";
            num.textContent = "0";
        }else{
            num.id = `${i+1}`;
            num.textContent = `${i+1}`;
        }
        num.style.border = '4px solid black';
        numbers.appendChild(num);
    }
}

function createOperators(){
    const operator = ['+','-','*','/'];
    operator.forEach(function(op){
        let ops = document.createElement("button");
        ops.classList.add("operator");
        let dimensions = 200/4;
        ops.style.minHeight = `${dimensions}px`;
        ops.style.minWidth = `${dimensions}px`;
        ops.textContent = op;
        ops.style.border= '4px solid black'
        operators.appendChild(ops);
    })

}


function pressedNumpad(){
    const numpad = document.querySelectorAll(".num");
    
    numpad.forEach((num) => {
        num.addEventListener("click", (event) => {
            console.log(event.target.id);
        })
    })
    
}