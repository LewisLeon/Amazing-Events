const mainContent = document.getElementById("main")
const cartas = document.getElementById('main')
const checks = document.getElementById('checkbox')
const input = document.getElementById("filtro")

fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then((Response)=> Response.json())
.then((datos)=> {
    /* console.log(datos) */
    Cartas(datos)
    filtradoFechas(datos)
    filtroMain(datos)
})

/* creador de cartas principal */function Cartas(datos) {
    let cont = ""
    datos.events.forEach (evento => {
        cont += `<div id="${evento._id}" class="card m-4 cards hs" style="width: 18rem;">
        <img src=${evento.image} class="card-img-top p-2" alt="img Cinema">
        <div class="card-body fondoTex">
            <h5 class="card-title name">${evento.name}</h5>
            <p class="card-text align-content-between">${evento.description}</p>
            <div class="cardS align-content-end">
                <p>Price: ${evento.price}$</p>
                <p class="filtro cate">${evento.category}</p>
                <a href="./Details.html?id=${evento._id}" class="btn text-danger especial">More details</a>
            </div>
        </div>
        </div>`
    })

    mainContent.innerHTML = cont
}

/* filtrado de eventos por fecha */function filtradoFechas(datos) {
let dateB= datos.currentDate
let aux2 = dateB.slice(0,4)
let aux3 = dateB.slice(5,7)
let aux4 = dateB.slice(8,10)
let dateCurrent ={
    year: parseInt(aux2),
    month: parseInt(aux3),
    day: parseInt(aux4)
}
let aux
let date
let eventos = {
    EventUpcoming:[    
    ],
    EventPast:[
    ]}
datos.events.forEach((dat) => {
    aux  = dat.date
    aux2 = aux.slice(0,4)
    aux3 = aux.slice(5,7)
    aux4 = aux.slice(8,10)
    date ={
        year: parseInt(aux2),
        month: parseInt(aux3),
        day: parseInt(aux4)
    }
    if (date.year < dateCurrent.year){
        eventos.EventPast.push(dat)
    } else if (date.year > dateCurrent.year){
        eventos.EventUpcoming.push(dat)
    } else{
        if (date.month < dateCurrent.month){
            eventos.EventPast.push(dat)
        } else if (date.month > dateCurrent.month){
            eventos.EventUpcoming.push(dat)
        } else{
            if (date.day < dateCurrent.day){
                eventos.EventPast.push(dat)
            } else if (date.day > dateCurrent.day){
                eventos.EventUpcoming.push(dat)
            }
        }
    }
})
/* console.log(eventos.EventPast);
console.log(eventos.EventUpcoming); */
}

/* filtro de cartas en el Home */function filtroMain(datos) {
input.addEventListener('input', filtrador)
checks.addEventListener('change',filtrador)
Tarjetas(datos.events)
Checkboxes(datos.events)
function filtrador(){
    let firstFilter = textFilter(datos.events,input.value)
    let secondFilter = catFilter(firstFilter)
    Tarjetas(secondFilter)
}
//********* filtrador por checkbox *****//
function Checkboxes(array){
    let categoriasArray = array.map( evento => evento.category)
    let categoriasSet = new Set(categoriasArray.sort((a,b)=>{
        if(a<b){
            return -1
        }
        if(a>b){
            return 1
        }
        return 0
    }))
    let checkss = ''
    categoriasSet.forEach(cate =>{
        checkss += `<li><input id="${cate}" class="form-check-input" value="${cate}" type="checkbox" role="switch">${cate}</li>`
    })
    checks.innerHTML = checkss
}
//********* filtrador por texto*********//
function textFilter(array, texto){
    let arrayFiltrado = array.filter(evento => evento.name.toLowerCase().includes(texto.toLowerCase()))
    return arrayFiltrado
}
function catFilter(array){
    let checkboxes = document.querySelectorAll("input[type='checkbox']")
    let arrayChecks = Array.from(checkboxes)
    let checksCheckeados = arrayChecks.filter(check => check.checked)
    if(checksCheckeados.length == 0){
        return array
    }
    let categorias = checksCheckeados.map(check => check.value)
    let arrayFiltrado = array.filter(elemento => categorias.includes(elemento.category))
    return arrayFiltrado
}
function Tarjetas(array){
    if(array.length == 0){
        cartas.innerHTML = "<h2 class='display-1 fw-bolder'>No hay elementos coincidentes!</h2>"
        return
    }
    let tarjetas = ''
    array.forEach(evento => {
        tarjetas += `<div id="${evento._id}" class="card m-4 cards hs" style="width: 18rem;">
        <img src=${evento.image} class="card-img-top p-2" alt="img Cinema">
        <div class="card-body fondoTex">
            <h5 class="card-title name">${evento.name}</h5>
            <p class="card-text align-content-between">${evento.description}</p>
            <div class="cardS align-content-end">
                <p>Price: ${evento.price}$</p>
                <p class="filtro cate">${evento.category}</p>
                <a href="./Details.html?id=${evento._id}" class="btn text-danger especial">More details</a>
            </div>
        </div>
        </div>`
    })
    cartas.innerHTML = tarjetas
}
}