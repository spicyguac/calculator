const numbers = document.querySelector(".numbers");
const base = document.querySelector("div");
const operators = document.querySelector(".operators");
const display = document.querySelector(".workingMath");
let equation = [];
const clear = document.querySelector("#clear");

document.addEventListener("DOMContentLoaded", function(){
   createNumpad();
   createOperators();
   usingCalculator();
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
        ops.id = op;
        let dimensions = 200/4;
        ops.style.minHeight = `${dimensions}px`;
        ops.style.minWidth = `${dimensions}px`;
        ops.textContent = op;
        ops.style.border= '4px solid black'
        operators.appendChild(ops);
    })

}


function usingCalculator(){
    const numpad = document.querySelectorAll(".num");
    const allOperators = document.querySelectorAll(".operator")

    numpad.forEach((num) => {
        num.addEventListener("click", (event) => {
            //console.log(event.target.id);
            displayMath(event.target.id);
        })
    })
    
    allOperators.forEach((operator) => {
        operator.addEventListener("click", (event) => {
            //console.log(event.target.id);
            displayMath(event.target.id);
        })
    })

    clear.addEventListener("click", (event) => {
        displayMath("clear");
    })

    
}

function displayMath (input){
    const nums = [1,2,3,4,5,6,7,8,9,0];
    const opss = ['+','-','*','/'];
    let solution = 0;

    if(input == "clear"){
        equation = [];
    }

    //checks if they are pressing an operator without number and returns 0 and operator
    if(opss.includes(input)&&equation.length < 1){
        equation = [0];
        equation.push(input);
    }

    //checks if they there are any other operators in the equation already    
    if(opss.includes(input)){
        if(opss.includes(equation[equation.length-1])){
            equation.pop();
            equation.push(input);
        }else{
            if(opss.some(r => equation.includes(r))){
                solution = evaluate(equation);
                equation = [solution];
            }else{
                equation.push(input);
            }
        }       
    }
    
    if(input == "="){
        if(equation.length < 1){
            equation = [0];
        }
        if(opss.includes(input)&&equation.length < 1){
            equation = [0];
            equation.push(input);
        }
        //evaluate
    }

    if(nums.includes(input*1)){
        equation.push(input);
    }

    display.textContent = equation.join("");

}

function evaluate(array){
    let op = "";
    let solution = 0;

    array.forEach((input) => {
        if(Number.isInteger(input*1)==false){
            op = input;      
        }
    })

    let firstNum = array.slice(0, array.indexOf(op)).join("")*1;
    let secondNum = array.slice(array.indexOf(op)+1, array.length).join("")*1;
    
    console.log(array,firstNum, secondNum, op);

    if(op=='/' && secondNum == 0){
        return solution = 'you twat';
    }
    
    switch (op) {
        case '+':
            solution = firstNum + secondNum
            break;
        case '-':
            solution = firstNum - secondNum
            break;
        case '*':
            solution = firstNum * secondNum
            break;
        case '/':
            solution = firstNum / secondNum
            break;
        default:
            solution = 0; 
    }

    return solution;

}