let arrayElemt = JSON.parse(localStorage.getItem('arrayElemt')) || [];
function calcular(){
    let nombre =  document.getElementById("nombre").value;
    let consu = document.getElementById("consu").value;
    let selectEstrato = document.getElementById("estrato")    
    let e1 = (consu*250)-(2300*0.4)
    let e2 = (consu*350)-(3200*0.3)
    let e3 = (consu*460)-(3900*0.1)

if( selectEstrato.value === "1" ){
        alert(`Señor ${nombre} su total de mts consumidos es ${consu}, el cargo fijo 2300 y tiene subsidio del 40%.`) 
        alert(`Su total es de ${consu*250}, el total sub. es ${2300*0.4}, total a pagar es ${(consu*250)-(2300*0.4)}`)
    }
    else if ( selectEstrato.value == 2 ){
        alert(`Señor ${nombre} su total de mts consumidos es ${consu}, el cargo fijo 3200 y tiene subsidio del 30%.`)
        alert(`Su total es de ${consu*350}, el total sub. es ${3200*0.3}, total a pagar es ${(consu*350)-(3200*0.3)}`)
    }
    else if ( selectEstrato.value == 3 ){
        alert(`Señor ${nombre} su total de mts consumidos es ${consu}, el cargo fijo 3900 y tiene subsidio del 10%.`)
        alert(`Su total es de ${consu*460}, el total sub. es ${3900*0.1}, total a pagar es ${(consu*460)-(3900*0.1)}`)    
    }
setLocalStorage(nombre,consu,e1,e2,e3)

}

function setLocalStorage(nombre, consu, e1, e2, e3){
    const mensaje = alert("Se ingresaron a la base de datos nuevos elementos")
    arrayElemt.push({arrayNombre: nombre, arrayConsu: consu, arrayE1: e1, arrayE2: e2, arrayE3: e3})
    localStorage.setItem("arrayElemt",JSON.stringify(arrayElemt))
    document.getElementById("mensaje")
}

// function setLocalStorage(nombre, consu, e1, e2, e3){
//     const mensaje = alert("Se ingresaron a la base de datos nuevos elementos")
//     let arrayEs = {}
//     if(selectEstrato.value === "1"){
//         arrayEs = {arrayEs1:  e1}
//     }else if(selectEstrato.value === "2"){
//         arrayEs = {arrayEs2: e2}
//     }else if(selectEstrato.value === "3"){
//         arrayEs = {arrayEs: e3}
//     }
//     arrayElemt.push({arrayNombre: nombre, arrayConsu: consu, ...arrayEs})
//     localStorage.setItem("arrayElemt",JSON.stringify(arrayElemt))
//     document.getElementById("mensaje")
// }