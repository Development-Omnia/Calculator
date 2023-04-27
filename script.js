const numBtn = document.getElementsByClassName("num btn");


let pressed;
let display;
let displayArr = [];

let firstNum;
let operator;
let secondNum;

let answer;

let operatorPressed = false;

let firstNumArr = [];
let secondNumberArr = [];


function add(a,b){
    answer = a+b
    console.log(answer)
    return answer
}
function subtract(a,b){
    answer = a-b
    console.log(answer)
    return answer
}
function multiply(a,b){
    answer = a*b
    console.log(answer)
    return answer
}
function divide(a,b){
    answer = ab
    console.log(answer)
    return answer
}

function operate(a,oper,b){
    if(oper == "+"){
        console.log('pp');
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
            display = operate(parseInt(firstNum), operator, parseInt(secondNum))
            popDisp(display)
            operatorPressed = false
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
        clearDisp();
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
    console.log(firstNum)
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
    console.log(secondNum)
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

function clearDisp(){
    display = undefined;
    popDisp()
    // alert("not complete, site will reload")
    // window.location.reload()
}