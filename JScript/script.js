//Declaración de variables y uso de DOM
//var pName = document.getElementById('name');
var rightTitle = document.getElementById('titleRightAnswers');
var wrongTitle = document.getElementById('titleWrongAnswers');
var correct = document.getElementById('right');
var incorrect = document.getElementById('wrong');
var image1 = document.getElementById("image1"); //Variables para mostrar imágenes en el display
var image2 = document.getElementById("image2");
var showResults = document.getElementById('show-results');

var notStart = "<h2 id='no-Play'> ¡¡¡ JUGAREMOS PARA LA PRÓXIMA !!! </br> :( </h2> ";

function myFunction() {
    var pName = document.getElementById("myText").value;
    document.getElementById("name").innerHTML = 'Bienvenida ' + pName;
}
//var yourName = '¿Cuál es tu nombre?'; //Declaración de variable para obtener el nombre de la usuaria
//var enterName = prompt(yourName); // Prompt para preguntar el nombre de la usuaria
//pName.innerHTML = 'Bienvenid@ ' + name;  // Imprimir la Bienvenida con el nombre que ha introducido la usuaria
//var question0 = '¿Lista para jugar?'; //Declaración de variable para saber si desea jugar
//var isReadyToPlay = confirm(question0) //Confirm que nos indicará si la usuaria desea iniciar el juego
function vamosAJugar() {
  document.getElementById("render").innerHTML = '';
  var tusResp = document.getElementById("tusRespuestas")
  // cuando el codiguito se repide mas veces se puede guardar en variables
  tusResp.style.display = 'block';

}

function noVamosAJugar() {
  document.getElementById("render").innerHTML = notStart;
  document.getElementById("tusRespuestas").style.display= 'none';
}
//if(isReadyToPlay) { //Si la usuaria desea jugar se desplegarán los prompts de las preguntas


  //console.log(question1, question2, question); //Respuestas registradas en la consola. Comparación entre respuestas correctas e incorrectas
//} else {
  //Si la usuaria decide no jugar la llevará a una nueva pantalla invitándola a jugar para la próxima
  console.log(notStart);
  //notStart.style.display = 'block';
//}

function lastFunction(){
  var question1 = document.getElementById('respuesta1').value;
  var question2 = document.getElementById('respuesta2').value;
  var question3 = document.getElementById('respuesta3').value;

  var correct1 =''; //Declaración de variables como strings vacíos que llenaremos con la información de las respuestas correctas del usuario
  var correct2 ='';
  var correct3 ='';
  var incorrect1 ='';
  var incorrect2 ='';
  var incorrect3 ='';
  console.log(question1,question2,question3)


  if (question1 == 'c' || 'C') { //Condicionales para conocer los resultados que se desplegarán al final del juego
    console.log('respuestacorrecta');
    correct1 = '1.HTML es: c) Un lenguaje de marcado y modelado semántico.';
  } else {
    console.log('respuestaincorrecta');
    incorrect1 = '1.Upss...te falló. La respuesta correcta es: C. HTML es un lenguaje de marcado y modelado semántico';
  }

  if (question2 == 'b'|| 'B') {
    console.log('respuestacorrecta');
    correct2 = '2.¿Qué significa CSS? b) Hojas de estilo en cascada.';
  } else {
    console.log('respuestaincorrecta');
    incorrect2 = '2.Será para la próxima. la respuesta correcta es: B. CSS significa hojas de estilo en cascada.';
  }

  if (question3 == 'c' || 'C') {
    console.log('respuestacorrecta');
    correct3 = '3.¿Cuál de estas no es una estructura de control? c) do while.';
  } else {
    console.log('respuestaincorrecta');
    incorrect3 = '3.¡Oh! No acertaste, la respuesta correcta es: C. do while no es una estructura de control que hayamos visto aun.';
  }


  /* Acciones de impresión de respuestas */
    showResults.style.display = 'block';
      titleRightAnswers.innerHTML = 'Respuestas Correctas:' ; //Impresión de resultados en la pantalla final del juego
      titleWrongAnswers.innerHTML = 'Respuestas Incorrectas:';
      right.innerHTML = '</br>' + correct1 + '</br>' + correct2 + '</br>'+ correct3;
      wrong.innerHTML ='</br>' + incorrect1 + '</br>' + incorrect2 + '</br>' + incorrect3;
    
}