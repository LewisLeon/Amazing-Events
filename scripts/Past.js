let PastContent = document.getElementById("main")

let cont = ""

eventos.EventPast.forEach((evento) => {
    cont += `<div id="${evento.id}" class="card m-4 cards hs" style="width: 18rem;">
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

PastContent.innerHTML = cont