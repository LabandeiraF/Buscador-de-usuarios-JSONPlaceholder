
const buscador = document.getElementById('input-buscador');
const btnBuscador = document.getElementById('btn-buscador');
const usuario = document.getElementById('usuario');

btnBuscador.addEventListener('click', async function () {
    const nombreUsuario = buscador.value.trim();

    if (nombreUsuario === '') {
        alert('ingrese un nombre de usuario valido');
        return;
    }

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?name=${nombreUsuario}`);
        if (!response.ok) {
            console.error('informacion no encontrada');
        }
        const usuarios = await response.json();
        Resultado(usuarios);
    } catch (error) {
        console.error(error);
        alert('Ocurrió un error');
    }
});

function Resultado(usuarios) {
    usuario.innerHTML = '';

    if (usuarios.length === 0) {
        usuario.innerHTML = '<p>usuario no existe en la base de datos</p>';
        return;
    }

    usuarios.forEach(function (usuario) {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('card', 'mb-3');
        tarjeta.innerHTML = `
            <div class="card">
                <p>${usuario.name}</p>
                <p>Email: ${usuario.email}</p>
                <p>Dirección: ${usuario.address.city}, ${usuario.address.street}</p>
                <p>Teléfono: ${usuario.phone}</p>
            </div>
        `;
        usuario.appendChild(tarjeta);
    });
}

fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  body: JSON.stringify({
    title: 'juan',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));