function enviar(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "martineztomaselias@gmail.com",
        Password : "7C4993BA8409DBD44FC1DDEC7C774E5A3BDE",
        To : "martineztomaselias@gmail.com",
        From : document.getElementById("email").value,
        Subject : "Estoy interesado",
        Body : "Hola, soy " + document.getElementById("nombre").value + "<br>" + "Estoy interesado en la carrera " + document.getElementById("carrera").value + "<br>Mi numero de telefono es " + document.getElementById("numero").value,
    }).then(
        message => alert(message)
    );
}