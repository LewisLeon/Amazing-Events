const cartas = document.getElementById('main')

const checks = document.getElementById('checkbox')

const input = document.getElementById("filtro")

input.addEventListener('input', filtrador)

checks.addEventListener('change',filtrador)

Tarjetas(data.events)
Checkboxes(data.events)


function filtrador(){
    let firstFilter = textFilter(data.events,input.value)
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
        tarjetas += `<div id="${evento.id}" class="card m-4 cards hs" style="width: 18rem;">
        <img src=${evento.image} class="card-img-top p-2" alt="img Cinema">
        <div class="card-body fondoTex">
            <h5 class="card-title name">${evento.name}</h5>
            <p class="card-text align-content-between">${evento.description}</p>
            <div class="cardS align-content-end">
                <p>Price: ${evento.price}$</p>
                <p class="filtro cate">${evento.category}</p>
                <a href="./Details.html?id=${evento.id}" class="btn text-danger especial">More details</a>
            </div>
        </div>
        </div>`
    })
    cartas.innerHTML = tarjetas
}
