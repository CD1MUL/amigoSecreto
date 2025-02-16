// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// para desarrollar la actividad se usoron fuentes de videos Alura, Trello, developer.mozilla, YouTube entre otros.
// INTENTO 1

//  Creando array
//let amigo = [];

//Realizando función con getElement
//function añadirAmigo()  {
  //  let nombreHumano = document.getElementById("amigo").value;
   // if (nombreHumano.trim() === ""){
     //   alert("Por favor, inserte un nombre.");
    //} else {
      //  amigo.push(añadirAmigo);
        //document.querySelector("#amigo").value = "";
        //verListaAmigo ();
   // }
//
//}
// Función lista de amigo en la pantalla

////function verListaAmigo(){
    //let listaAmigoSorteados = document.querySelector("#listaAmigoSorteados");
    //listaAmigoSorteados.innerHTML="";
    //for ( let i=0; i< listaAmigoSorteados.length; i++){
      //  let nLista = document.createElement("li");
        //nLista.innerHTML = listaSorteo[i];
        //listaAmigoSorteados.appendChild(nLista);
   // }
//}

// INTENTO 2 VAMOS QUE SE PUEDE !!!
// 


const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigo = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

// Función
function agregarAmigo() { 
  if(inputAmigo.value == ""){
      alert("Por favor, inserte un nombre.")
  }
    listaAmigos.push(inputAmigo.value);
    ulListaAmigo.innerHTML += `<li>${inputAmigo.value}</li>`;
    
};

//Sortear amigo

function sortearAmigo(){
  const random = Math.floor(Math.random() * listaAmigos.length);
  const amigoSecreto = listaAmigos[random];
   ulResultado.innerHTML = `<li>El amigo secreto ${amigoSecreto}</li>`;
}
