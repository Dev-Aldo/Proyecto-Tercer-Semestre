document.getElementById('postButton').addEventListener('click', function() {
    const content = document.getElementById('postContent').value; // Obtiene el texto ingresado en el área de texto
    const imageInput = document.getElementById('postImage'); // Obtiene el archivo de imagen cargado
    const postsContainer = document.getElementById('posts'); // Selecciona el contenedor donde se agregan las publicaciones

    // Verifica si el contenido está vacío
    if (content.trim() === '') {
        alert('Por favor, escribe algo antes de publicar.'); // Alerta si el texto está vacío
        return;
    }

    const postDiv = document.createElement('div'); // Crea un nuevo contenedor para la publicación
    postDiv.classList.add('post'); // Asigna la clase 'post' al contenedor

    const postContent = document.createElement('p'); // Crea un elemento <p> para el texto de la publicación
    postContent.textContent = content; // Establece el contenido de texto
    postDiv.appendChild(postContent); // Agrega el texto al contenedor de la publicación

    // Si hay una imagen cargada
    if (imageInput.files.length > 0) {
        const img = document.createElement('img'); // Crea un elemento de imagen
        img.src = URL.createObjectURL(imageInput.files[0]); // Define la URL de la imagen
        postDiv.appendChild(img); // Agrega la imagen al contenedor de la publicación
    }

    postsContainer.appendChild(postDiv); // Agrega la publicación completa al contenedor de publicaciones
    document.getElementById('postContent').value = ''; // Limpia el área de texto
    imageInput.value = ''; // Limpia la selección de imagen
});
