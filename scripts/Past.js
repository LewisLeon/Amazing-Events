let PastContent = document.getElementById("main")

let cont = ""

for (let i = 0 ; i < EventPast.name.length ; i++ ){

    cont += `<div id="1" class="card m-4 cards hs" style="width: 18rem;">
    <img src=${EventPast.imagen[i]} class="card-img-top p-2" alt="img Cinema">
    <div class="card-body fondoTex">
        <h5 class="card-title ">${EventPast.name[i]}</h5>
        <p class="card-text align-content-between">${EventPast.descrip[i]}</p>
        <div class="cardS align-content-end">
            <p>Price: ${EventPast.price[i]}$</p>
            <a href="./Details.html" class="btn text-danger especial">More details</a>
        </div>
    </div>
    </div>`

}

PastContent.innerHTML = cont