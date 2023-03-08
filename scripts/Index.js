
/* console.table(category)
console.table(eventos) */

/* <div id="1" class="card m-4 cards hs" style="width: 18rem;">
<img src="./imagenes/Cinema.jpg" class="card-img-top p-2" alt="img Cinema">
<div class="card-body">
    <h5 class="card-title mt-5">Cinema</h5>
    <p class="card-text align-content-between">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div class="cardS align-content-end">
        <p>Price: ******</p>
        <a href="./Details.html" class="btn text-danger especial">More details</a>
    </div>
</div>
</div> */

let mainContent = document.getElementById("main")

let cont = ""

for (data.events of data.events){

    cont += `<div id="1" class="card m-4 cards hs" style="width: 18rem;">
    <img src=${data.events.image} class="card-img-top p-2" alt="img Cinema">
    <div class="card-body fondoTex">
        <h5 class="card-title ">${data.events.name}</h5>
        <p class="card-text align-content-between">${data.events.description}</p>
        <div class="cardS align-content-end">
            <p>Price: ${data.events.price}$</p>
            <a href="./Details.html" class="btn text-danger especial">More details</a>
        </div>
    </div>
    </div>`

}

mainContent.innerHTML = cont