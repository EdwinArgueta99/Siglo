let main=document.getElementById("main");

//div
let div1=document.createElement("div");
div1.classList.add("div1")
// h1
let h1=document.createElement("h1");
h1.textContent=("Bienvenido!");
div1.appendChild(h1);

// crear un parrafo
let parrafo=document.createElement("p");
parrafo.textContent=("Escribe tu fecha y se pasara al siglo.");
div1.appendChild(parrafo);

//div
main.appendChild(div1);

//hacer el form

let div2=document.createElement("div");
div2.innerHTML=('<input type="text" id="text" placeholder="Comeinza a escribir">');
div2.classList.add("div2")
main.appendChild(div2);

let button=document.createElement("button");
button.textContent="Enviar";
div2.appendChild(button);

let resultado=document.createElement("p");
div2.appendChild(resultado);

button.addEventListener("click",()=>{
    let numero=text.value/100;
    let round=Math.ceil(numero)
    resultado.textContent=round;
}
);