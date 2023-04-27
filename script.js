const numBtn = document.getElementsByClassName("num btn");


let a;
let operator;
let b;
let display;
let displayArr = [];
let pressed;

function add(a,b){
    console.log(a+b)
}
function subtract(a,b){
    console.log(a-b)
}
function multiply(a,b){
    console.log(a*b)
}
function divide(a,b){
    console.log(a/b)
}

function operate(a,operator,b){
    if(operator == "+"){

    }
    if(operator == "-"){

    }
    if(operator == "*"){

    }
    if(operator == "/"){

    } else return console.log("Error")


}

//gets pressed number button
document.addEventListener('click', function(e){
    if(e.target.className=="num btn"){
        pressed = e.target.innerHTML
        popDisp(pressed);
    }
})

document.addEventListener('click', function(e){
    if(e.target.className=="delete btn"){
        deleteNum()
        popDisp();
    }
})

document.addEventListener('click', function(e){
    if(e.target.className=="clear btn"){
        clearDisp();
    }
})

let text = '123214'

function popDisp(update){
    
    if(display){
        if(update === "."){
            if(display.slice(-1) === ".") return
        }
    }
    /*todo
    add a xzero if first key pressed is .
    */


    displayArr.push(update)
    display = displayArr.join("");
    
    // console.log(display.slice(-1))
    // console.log(display.slice(-2))
    console.log(display)
    
    


    document.getElementById("displayText").innerHTML = display;

}

function deleteNum(){
    alert("not complete")
}

function clearDisp(){
    alert("not complete, site will reload")
    window.location.reload()
}