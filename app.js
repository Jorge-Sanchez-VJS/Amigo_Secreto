// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigosSecretos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    let inputNombre = document.getElementById("amigo");
    let nombre = inputNombre.value.trim();
    if (nombre !== "" && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
        inputNombre.value = "";
    } else {
        alert("Ingrese un nombre válido o que no esté repetido");
    }
}

// Función para eliminar un nombre de la lista
function eliminarNombre(nombre) {
    amigos = amigos.filter(amigo => amigo !== nombre);
    actualizarLista();
}

// Función para actualizar la visualización de la lista
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = function() { eliminarNombre(nombre); };
        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
}

// Función para sortear amigos
function sortearAmigo() {
    // Asegurarse de que haya suficientes amigos
    if (amigos.length < 2) {
        alert("Se necesitan al menos dos personas para sortear");
        return;
    }

    // Crear una copia del array para no alterar el original
    let amigosCopy = [...amigos];
    amigosSecretos = [];

    // Asignar amigos secretos de manera aleatoria
    for (let i = 0; i < amigos.length; i++) {
        // Obtener un amigo aleatorio de la lista
        let amigoIndex = Math.floor(Math.random() * amigosCopy.length);
        let amigoSecreto = amigosCopy.splice(amigoIndex, 1)[0];  // Eliminar el amigo sorteado
        amigosSecretos.push({ amigo: amigos[i], amigoSecreto: amigoSecreto });
    }

    // Mostrar los resultados en la página
    mostrarResultado();
}

// Función para mostrar el resultado del sorteo
function mostrarResultado() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";  // Limpiar la lista anterior

    amigosSecretos.forEach(pareja => {
        let li = document.createElement("li");
        li.textContent = `${pareja.amigo} -> ${pareja.amigoSecreto}`;
        resultado.appendChild(li);
    });
}
