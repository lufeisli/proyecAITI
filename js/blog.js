let mensajes = [
    {
        title:'Carla Angelica',
        content:'La verdad es que me encanta la carrera de ITI',
    },
    {
        title: 'Tomas Elias',
        content:'Ayuda no me funcona la letra i de mi teclado',
    },
    {
        title: 'Daniel Ramirez',
        content:'En ingenieria, todo se arregla multiplicando lo que se esta dividiendo',
    },
    {
        title: 'Luis Felipe',
        content:'La carrera de ITEM tiene un gran campo laboral',
    },
]


window.onload=frases();

let frase = document.getElementById("blog-posts");

function frases(){

    for (let i in mensajes){
        const post = document.createElement('div');
        post.classList.add('m-3','alert','alert-secondary');

        const postTitle = document.createElement('h2');
        postTitle.textContent = mensajes[i].title;
        const postContent = document.createElement('p');
        postContent.textContent = mensajes[i].content;
        post.appendChild(postTitle);
        post.appendChild(postContent);
        document.getElementById('blog-posts').appendChild(post);
    }
}
document.getElementById('post-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener valores del formulario
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    frase.innerHTML=""

    mensajes.push({title: title,
        content: content});
    document.getElementById('post-form').reset();

    frases();
});