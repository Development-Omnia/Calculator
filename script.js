const numBtn = document.getElementsByClassName("num btn");


let a;
let operator;
let b;
let display=[];

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


    display.push(update)
    // console.log(display.join(""))
    
    document.getElementById("displayText").innerHTML = display.join("");

}

function deleteNum(){

    text = text.substring(0, text.length - 1);
    popDisp(text)
}

function clearDisp(){
    alert("not complete, site will reload")
    window.location.reload()
}