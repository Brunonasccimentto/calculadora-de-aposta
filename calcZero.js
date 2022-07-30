//calculadora lose/zero


function changeZero(){

    let inputZero1 = document.getElementById("inputZero1").value;
    let valorZero = document.getElementById("valorZero");
    valorZero.innerText = inputZero1;
    
    let inputZero2 = document.getElementById("inputZero2").value;
    let odd0 = document.getElementById("odd0");
    odd0.innerText = inputZero2;
    
    let apostaZero = document.getElementById("apostaZero");
    apostaZero.innerText = (inputZero1 * inputZero2).toFixed(2)
    
    apostaZero = parseFloat((inputZero1 * inputZero2).toFixed(2))
    
    }

function changeZero2(){

    let inputZero1 = document.getElementById("inputZero1").value
    let inputZero3 = document.getElementById("inputZero3").value
    let apostar0 = document.getElementById("apostar0")
    let zero = document.getElementById("zero")

    let x = inputZero3 - 1

    let calc = inputZero1 / x;

    apostar0.innerText = parseFloat(calc).toFixed(2);
    apostar0 = parseFloat(calc).toFixed(2);
    zero.innerText = parseFloat(calc * inputZero3).toFixed(2)

    return calc
}

function gain(){

    let inputZero1 = document.getElementById("inputZero1").value
    let inputZero2 = document.getElementById("inputZero2").value
    let inputZero3 = document.getElementById("inputZero3").value
    let gain0 = document.getElementsByClassName("gain")[0]
    let gain1 = document.getElementsByClassName("gain")[1]

    gain0.innerText = ((parseFloat(inputZero1) * inputZero2) - (parseFloat(inputZero1) + changeZero2())).toFixed(2)
    gain1.innerText = ((changeZero2() * inputZero3) - (changeZero2() + parseFloat(inputZero1))).toFixed(2)

    if(document.getElementsByClassName("gain")[0].innerText < 0){
        gain0.style.color = "red"
    }  
    else {
        gain0.style.color = "green"
    }
}

function probability01(){

    let inputZero2 = document.getElementById("inputZero2").value;
    let prob = document.getElementsByClassName("probability0")[0];
    prob.innerText = ((1 / inputZero2)* 100).toFixed(2) + "%";

        if (inputZero2 == ""){
        prob.innerText = ""
        }
}      

function probability02(){

    let inputZero3 = document.getElementById("inputZero3").value;
    let prob = document.getElementsByClassName("probability0")[1];
    prob.innerText = ((1 / inputZero3)* 100).toFixed(2) + "%";

        if (inputZero3 == ""){
        prob.innerText = ""
        }
}     