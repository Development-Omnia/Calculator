const numBtn = document.getElementsByClassName("num btn");


let pressed;
let display;

let firstNum;
let operator;
let secondNum;

// let answer;

let operatorPressed = false;

let firstNumArr = [];
let secondNumberArr = [];


function add(a,b){
    answer = a+b
    return answer
}
function subtract(a,b){
    answer = a-b
    return answer
}
function multiply(a,b){
    answer = a*b
    return answer
}
function divide(a,b){
    answer = a/b
    return answer
}

function operate(a,oper,b){
    if(oper == "+"){
        return add(a,b);
    }
    if(oper == "-"){
        return subtract(a,b);
    }
    if(oper == "*"){
        return multiply(a,b);
    }
    if(oper == "/"){
        return divide(a,b);
    }


}

//gets pressed number button
document.addEventListener('click', function(e){
    if(e.target.className=="num btn"){
        pressed = e.target.innerHTML
        if(operatorPressed == false){
            firstNumber(pressed);
        }
        if(operatorPressed == true){
            secondNumber(pressed);
        }

    }
})

document.addEventListener('click', function(e){
    if(e.target.className=="operator btn"){
        pressed = e.target.innerHTML
        operator = pressed
        popDisp(pressed)
        operatorPressed = true;
        // if(operatorPressed == false){
        // }
        // else
        // console.log(display.slice(-1))
    }
})

document.addEventListener('click', function(e){
    if(e.target.className=="equals btn"){
        pressed = e.target.innerHTML
        if(operatorPressed == true) {
            display = operate(parseFloat(firstNum), operator, parseFloat(secondNum))
            popDisp(display)
            reset()
        }
    }
})

document.addEventListener('click', function(e){
    if(e.target.className=="delete btn"){
        deleteNum()
    }
})

document.addEventListener('click', function(e){
    if(e.target.className=="clear btn"){
        reset();
        popDisp("")
    }
})


function firstNumber(num){
    if(display){
        if(num === "."){
            if(display.slice(-1) === ".") return
        }
    }

    firstNumArr.push(num)
    firstNum = firstNumArr.join("");
    popDisp(firstNum);
}

function secondNumber(num){
    if(display){
        if(num === "."){
            if(display.slice(-1) === ".") return
        }
    }

    secondNumberArr.push(num)
    secondNum = secondNumberArr.join("");
    popDisp(secondNum);
}

function popDisp(first, oper, second){
    
    // if(display){
    //     if(update === "."){
    //         if(display.slice(-1) === ".") return
    //     }
    // }
    /*todo
    add a xzero if first key pressed is .
    */

    // displayArr.push(update)
    // display = displayArr.join("");
    

    
    document.getElementById("displayText").innerHTML = first;

}

function deleteNum(){
    alert("not complete")
}

function reset(){
    // firstNum = undefined;
    firstNumArr = [];
    // secondNum = undefined;
    secondNumberArr = [];
    // pressed = undefined;
    // display = undefined;
    operator = undefined;
    operatorPressed = false;
}