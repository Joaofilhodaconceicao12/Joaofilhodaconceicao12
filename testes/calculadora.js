var resultado = document.getElementById("resultado");

function insert(numero){
resultado.innerHTML += numero;
}

function clean(){
    resultado.innerHTML = "";
}


function back(){
    let rest = resultado.innerHTML
    resultado.innerHTML = rest.substring(0,rest.length -1)
}


function calcular(){

    if(resultado == undefined){
        document.querySelector("#resultado").innerHTML = eval(resultado.innerHTML)
    }else{
        alert("valor invalido !")
    }
 }
