//INTENTO 3

let amigos = []; 
console.log (amigos.length);

//Añadir la función
function agregarAmigo (){
    
    let nombreAmigo = document.getElementById ('amigo').value;
    console.log(nombreAmigo);
    console.log(typeof(nombreAmigo));
   
    if (nombreAmigo.trim() === "") {
            alert("Por favor, inserte un nombre.");
        } else {
            amigos.push(nombreAmigo); 
            actualizarLista(); 
            console.log(amigos);
            document.getElementById('amigo').value = ""; 
        }
}

function actualizarLista(){ 
    const listaElement = document.getElementById ('listaAmigos'); 
    listaElement.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){ 
        const li = document.createElement('li');
        li.textContent = amigos[i]; 
        listaElement.appendChild(li); 
        console.log(amigos);   
    }
}
function sortearAmigo(){
    const resultadoElement = document.getElementById('resultado');   
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); 
    const amigoSorteado = amigos [indiceAleatorio]; 
    console.log ("Amigo Sorteado:" + amigoSorteado);
    resultadoElement.innerHTML = "El amigo secreto es: " + amigoSorteado;
    }

