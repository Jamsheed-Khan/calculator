
let  input = document.getElementById('inp') 
function display(num){
    input.value += num
}

function calculate(){
    var a = document.getElementById('inp')
    a.value = eval(a.value)
}
function Clear(){
    input.value ="";
}
function del(){
    input.value = input.value.slice(0,-1);
}