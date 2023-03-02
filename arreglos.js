getData();
let arrayDatos = JSON.parse(localStorage.getItem('arrayDatos')) || [];

function guardar() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    setLocalStorage(nombre, apellido);
}

function setLocalStorage(nombre, apellido) {
    const valor = `${nombre} ${apellido}.`;
    const mensaje = 'Se guardo correctamente'

    arrayDatos.push({ nombre: nombre, apellido: apellido, nombreFull: valor })
    localStorage.setItem('arrayDatos', JSON.stringify(arrayDatos))
    document.getElementById("mensaje").innerHTML = mensaje

}
// function setLocalStorage(nombre, apellido) {
//     const valor = `${nombre} ${apellido}.`; // concatena el nombre y el apellido
//     const mensaje = 'Se guardo correctamente' // gardi e una constante el valor del mensaje
//     localStorage.setItem('nombreFull', valor) //envia a la storage el nombre completo
//     localStorage.setItem('nombre', nombre) // envia a la strorage el nombre1
//     localStorage.setItem('apellido', apellido) //envia a la stroage el apellido
//     document.getElementById("nombreFull").value = valor //imprime en el inmput el valor nom compelto
//     document.getElementById("mensaje").innerHTML = mensaje // imprime en span el mensaje
// }



// function getData() {
//     let nombreFull = localStorage.getItem('nombreFull')
//     let nombre = localStorage.getItem('nombre')
//     let apellido = localStorage.getItem('apellido')
//     console.log('storage' + nombreFull);

//     document.getElementById("nombreFull").value = nombreFull || 'NO hay datos'
//     document.getElementById("nombre").value = nombre || 'NO hay datos'
//     document.getElementById("apellido").value = apellido || 'NO hay datos'


// }