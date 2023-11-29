
const buscador = document.getElementById('input-buscador');
const btnBuscador = document.getElementById('btn-buscador');
const contenedorResultado = document.getElementById('usuario');

btnBuscador.addEventListener('click', async function () {
    const nombreUsuario = buscador.value.trim();

    if (nombreUsuario === '') {
        alert('Ingrese un nombre de usuario válido');
        return;
    }

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?name=${nombreUsuario}`);
        if (!response.ok) {
            console.error('Información no encontrada');
        }
        const usuarios = await response.json();
        Resultado(usuarios, contenedorResultado); 
    } catch (error) {
        console.error(error);
        alert('Ocurrió un error');
    }
});

function Resultado(usuarios, contenedor) {
    contenedor.innerHTML = ''; 

    if (usuarios.length === 0) {
        contenedor.innerHTML = '<p>Usuario no existe en la base de datos</p>';
        return;
    }

    usuarios.forEach(function (usuario) {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('card');
        tarjeta.innerHTML = `
            <div class="card">
                <p>${usuario.name}</p>
                <p>Email: ${usuario.email}</p>
                <p>Dirección: ${usuario.address.city}, ${usuario.address.street}</p>
                <p>Teléfono: ${usuario.phone}</p>
            </div>`;
        contenedor.appendChild(tarjeta); 
    });}