document.getElementById('postButton').addEventListener('click', function() {
    const content = document.getElementById('postContent').value;
    const imageInput = document.getElementById('postImage');
    const postsContainer = document.getElementById('posts');

    if (content.trim() === '') {
        alert('Por favor, escribe algo antes de publicar.');
        return;
    }

    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    const postContent = document.createElement('p');
    postContent.textContent = content;
    postDiv.appendChild(postContent);

    if (imageInput.files.length > 0) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(imageInput.files[0]);
        postDiv.appendChild(img);
    }

    // Contenedor de iconos de interacción
    const interactionDiv = document.createElement('div');
    interactionDiv.classList.add('interaction-icons');

    // Ícono y contador de "me gusta"
    const likeIcon = document.createElement('span');
    likeIcon.textContent = '❤️';
    likeIcon.classList.add('like-icon');

    const likeCount = document.createElement('span');
    likeCount.classList.add('like-count');
    likeCount.textContent = '0'; // Inicialmente 0 "me gusta"

    interactionDiv.appendChild(likeIcon);
    interactionDiv.appendChild(likeCount);

    // Ícono y contador de comentarios
    const commentIcon = document.createElement('span');
    commentIcon.textContent = '💬';
    commentIcon.classList.add('comment-icon');

    const commentCount = document.createElement('span');
    commentCount.classList.add('comment-count');
    commentCount.textContent = '0'; // Inicialmente 0 comentarios

    interactionDiv.appendChild(commentIcon);
    interactionDiv.appendChild(commentCount);

    postDiv.appendChild(interactionDiv);

    // Contenedor de comentarios y formulario, inicialmente oculto
    const commentsSection = document.createElement('div');
    commentsSection.classList.add('comments-section');
    commentsSection.style.display = 'none'; // Oculto por defecto
    postDiv.appendChild(commentsSection);

    // Contenedor de los comentarios
    const commentsContainer = document.createElement('div');
    commentsContainer.classList.add('comments');
    commentsSection.appendChild(commentsContainer);

    // Formulario para añadir comentarios
    const commentForm = document.createElement('div');
    commentForm.classList.add('comment-form');

    const commentInput = document.createElement('textarea');
    commentInput.placeholder = "Escribe un comentario...";
    commentForm.appendChild(commentInput);

    const commentButton = document.createElement('button');
    commentButton.textContent = "Comentar";
    commentButton.classList.add('comment-button');
    commentForm.appendChild(commentButton);

    commentsSection.appendChild(commentForm);

    // Evento para añadir un comentario
    commentButton.addEventListener('click', function() {
        const commentText = commentInput.value.trim();
        if (commentText !== "") {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.textContent = commentText;
            commentsContainer.appendChild(commentDiv);
            commentInput.value = ''; // Limpiar el campo de comentario
            commentCount.textContent = parseInt(commentCount.textContent) + 1; // Incrementar contador de comentarios
        } else {
            alert('Por favor, escribe algo antes de comentar.');
        }
    });

    // Lógica para mostrar/ocultar la sección de comentarios y formulario
    commentIcon.addEventListener('click', function() {
        commentsSection.style.display = commentsSection.style.display === 'none' ? 'block' : 'none';
    });

    // Lógica para alternar el contador de "me gusta"
    let liked = false; // Variable de estado para rastrear si ya se ha dado "me gusta"
    likeIcon.addEventListener('click', function() {
        if (!liked) { 
            likeCount.textContent = parseInt(likeCount.textContent) + 1; // Incrementa el contador
            liked = true; // Cambia el estado a "me gusta" dado
        } else { 
            likeCount.textContent = parseInt(likeCount.textContent) - 1; // Reduce el contador
            liked = false; // Cambia el estado a "me gusta" no dado
        }
    });

    postsContainer.appendChild(postDiv);

    document.getElementById('postContent').value = '';
    imageInput.value = '';
});

document.getElementById('createPostLink').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    const postForm = document.getElementById('postForm');

    // Alterna la visibilidad del formulario
    if (postForm.style.display === 'none' || postForm.style.display === '') {
        postForm.style.display = 'block'; // Muestra el formulario
    } else {
        postForm.style.display = 'none'; // Oculta el formulario
    }
});

