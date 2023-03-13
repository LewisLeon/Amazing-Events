let mainContent = document.getElementById("main")

let cont = ""

data.events.forEach((evento) => {
    cont += `<div id="${evento._id}" class="card m-4 cards hs" style="width: 18rem;">
    <img src=${evento.image} class="card-img-top p-2" alt="img Cinema">
    <div class="card-body fondoTex">
        <h5 class="card-title name">${evento.name}</h5>
        <p class="card-text align-content-between">${evento.description}</p>
        <div class="cardS align-content-end">
            <p>Price: ${evento.price}$</p>
            <a href="./Details.html" class="btn text-danger especial">More details</a>
        </div>
    </div>
    </div>`
})

mainContent.innerHTML = cont