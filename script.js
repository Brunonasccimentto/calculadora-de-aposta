

function change1(){

            let input1 = document.getElementById("input1").value;
            let valor1 = document.getElementById("valor1");
            valor1.innerText = input1;
            valor1 = input1;

            let input2 = document.getElementById("input2").value;
            let odd1 = document.getElementById("odd1");
            odd1.innerText = input2;

            let aposta1 = document.getElementById("aposta1");
            aposta1.innerText = (input1 * input2).toFixed(2);
            aposta1 = parseFloat((input1 * input2).toFixed(2));

            return aposta1;

        }

function change2(){


            let input3 = document.getElementById("input3");
            let odd2 = document.getElementById("odd2");
            odd2.innerText = input3.value;
            odd2 = input3.value;

            let valor1 = document.getElementById("valor1");
            let input1 = document.getElementById("input1").value;
            valor1 = input1;
            let valor2 = document.getElementById("valor2");
            valor2.innerText = (change1() / odd2).toFixed(2);
            valor2 = parseFloat((change1() / odd2).toFixed(2));

            var lucro = document.getElementById("result");
            lucro.innerText = parseFloat(change1() - (parseInt(valor1) + valor2)).toFixed(2);

            if(document.getElementById("result").innerText < 0){
                lucro.style.color = "red";
            }
                else
                lucro.style.color = "green";
            
            }
            
function aposta2(){

                
                let input3 = document.getElementById("input3").value;
                let valor2 = document.getElementById("valor2").innerText;
                let aposta2 = document.getElementById("aposta2");
            
                aposta2.innerText = (valor2 * input3).toFixed(2);

}

function probability1(){
    
                let input2 = document.getElementById("input2").value;
                let prob = document.getElementsByClassName("probability")[0];
                prob.innerText = ((1 / input2)* 100).toFixed(2) + "%";
}      
            
function probability2(){
            
                let input3 = document.getElementById("input3").value;
                let prob1 = document.getElementsByClassName("probability")[1];
                prob1.innerText = ((1 / input3)* 100).toFixed(2) + "%";
}
            









