let mainTitle = document.getElementById("main-title");
console.log(mainTitle);
console.log(mainTitle.innerText);
mainTitle.innerText = "TITULO CAMBIADO DINAMICAMENTE";
console.log(mainTitle. innerText);
let mainTexts = document.getElementsByClassName("main-text");
//Mostramos los elementos en consola
console.log(mainTexts); //Es un array
//Accedemos a un elemento y mostramos su contenido
console.log(mainTexts[0].innerText);
//Modificamos el contenido del elemento
mainTexts[0].innerText = "parrafo cambiado";
//Mostramos el contenido actualizado
console. log(mainTexts[0].innerText);
//getElemenstByTagName("etiqueta")-> Trae todos los elementos
let subtitles = document.getElementsByTagName("h2");
console.log(subtitles); //Es un array
console.log(subtitles[0].innerText);
console.log(subtitles[1].innerText);
console.log(subtitles[2].innerText);
let queryMainTitle = document.querySelector("#main-title");
console.log(queryMainTitle);
let queryMainText = document.querySelectorAll(".main-text");
console.log(queryMainText);

document.getElementById("main-button").addEventListener("click", function() {
    console.log("click en el boton");

    // Podemos cambiar estilos //

    
let mainButton = document.getElementById("main-button");

mainButton.addEventListener("click", () => {
  let currentBackgroundColor = document.body.style.backgroundColor;

  if (currentBackgroundColor === "blue") {
    document.body.style.backgroundColor = "black";
    mainButton.style.color = "white"; 
  } else {
    document.body.style.backgroundColor = "blue";
    mainButton.style.color = "yellow"; 
  }
});

    let magicNumber = document.querySelector("#magic-number").value;

    console.log(`Valor ingresado en el input: ${magicNumber}`);

    let greetParagraph = document.querySelector("#greet");

    // Validacion //
    if (magicNumber == "" || magicNumber.length === 0) {
      greetParagraph.innerText = "NO INGRESASTE UN NOMBRE";
    } else {
      greetParagraph.innerText = `Buenas noches ${magicNumber}`;
    }
});

