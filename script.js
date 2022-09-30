// const number = document.querySelector("#number");

let count = 0;

function decrease(){
    count=count-1;
    document.getElementById("number").textContent=count;
    // number.textContent=count;
}
function increase(){
    count=count+1;
    document.getElementById("number").textContent=count;
    // number.textContent=count;
}