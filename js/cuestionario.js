//declaracion de las preguntas con sus respectivas respuestas en un arreglo

const preguntas = [
    {
        pregunta: "¿Qué te gusta más?",
        respuestas: [
            {respuesta: "Resolver problemas complejos usando lógica y análisis",valor:false},
            {respuesta: "Diseñar y crear cosas nuevas usando tecnología",valor:true},
        ]
    },
    {
        pregunta: "¿Te consideras una persona?",
        respuestas: [
            {respuesta: "Detallista y organizada, con un enfoque en la precisión",valor:false},
            {respuesta: "Creativa e innovadora, con un enfoque en la visión general",valor:true},
        ]
    },
    {
        pregunta: "¿Qué te motiva más?",
        respuestas: [
            {respuesta: "Encontrar soluciones prácticas a problemas del mundo real",valor:false},
            {respuesta: "Explorar las posibilidades del futuro y crear nuevas tecnologías",valor:true},
        ]
    },
    {
        pregunta: "¿En qué tipo de entorno te sientes más cómodo trabajando?",
        respuestas: [
            {respuesta: "Estructurado y metódico, con tareas bien definidas",valor:false},
            {respuesta: "Dinámico y flexible, con espacio para la creatividad",valor:true},
        ]
    },
    {
        pregunta: "¿Qué te apasiona más?",
        respuestas: [
            {respuesta: "Comprender cómo funcionan los sistemas y cómo mejorarlos",valor:false},
            {respuesta: "Crear nuevas experiencias y productos utilizando la tecnología",valor:true},
        ]
    },
    {
        pregunta: "¿Qué tipo de habilidades te gustaría desarrollar?",
        respuestas: [
            {respuesta: "Habilidades técnicas sólidas en áreas como programación, electrónica y redes",valor:false},
            {respuesta: "Habilidades de pensamiento creativo, resolución de problemas y comunicación",valor:true},
        ]
    },
    {
        pregunta: "¿Qué te ves haciendo en el futuro?",
        respuestas: [
            {respuesta: "Trabajando en proyectos de ingeniería complejos que tengan un impacto en el mundo",valor:false},
            {respuesta: "Desarrollando nuevas tecnologías que cambien la forma en que vivimos y trabajamos",valor:true},
        ]
    },
    {
        pregunta: "¿Qué tipo de aprendizaje te atrae más?",
        respuestas: [
            {respuesta: "Aprendizaje basado en problemas, donde se aplica el conocimiento teórico a situaciones reales",valor:false},
            {respuesta: "Aprendizaje basado en proyectos, donde se trabaja en equipo para crear algo nuevo",valor:true},
        ]
    },
    {
        pregunta: "¿A qué tipo de personas te gustaría rodearte?",
        respuestas: [
            {respuesta: "Personas analíticas y orientadas a los detalles, con un interés en la resolución de problemas",valor:false},
            {respuesta: "Personas creativas e innovadoras, con un interés en la exploración de nuevas ideas",valor:true},
        ]
    },
];

//guardando objetos
const preguntaElemento = document.getElementById("mostrarpregunta")
const respuestasElemento = document.getElementById("menupreguntas");
const doc = new jsPDF();

//creando variables globales
let preguntaIndex = 0;
let contador = 0;

window.onload= empezar();

function empezar(){
    preguntaIndex=0;
    contador=0;
    mostrarPregunta();
}

function mostrarPregunta(){
    quitarPregunta();
    let preguntaActual = preguntas[preguntaIndex];
    preguntaElemento.innerHTML=preguntaActual.pregunta;

    preguntaActual.respuestas.forEach(respuestas=>{
       const boton = document.createElement("button");
       boton.innerHTML=respuestas.respuesta;
       boton.classList.add("btn");
        boton.classList.add("btn-secondary");
        boton.classList.add("mt-3");
       respuestasElemento.appendChild(boton);
       if(respuestas.valor){
           boton.dataset.valor = respuestas.valor;
       }
       boton.addEventListener("click",seleccion);
    });
}

function seleccion(e){
    const botonSelect=e.target;
    const iti = botonSelect.dataset.valor==="true";
    if (iti){
        contador++;
    }
    if (preguntaIndex < preguntas.length){
        preguntaIndex++;
        if (preguntaIndex < preguntas.length){
            mostrarPregunta();
        }else{
            mostrarPDF();
        }
    }
}
function quitarPregunta(){
    while(respuestasElemento.firstChild){
        respuestasElemento.removeChild(respuestasElemento.firstChild);
    }
}

function mostrarPDF(){
    let texto="La carrera ideal para ti es" +
        "";
    if(contador>=5){
        texto+= "Ingenieria en Tecnologias de la Informacion";
    }else{
        texto+="Ingenieria en Telematica";
    }
    doc.text(20,20,texto);
    doc.save("Resultados.pdf");
}