const queryString = location.search

let params = new URLSearchParams(queryString)

let id = params.get("id")

let evento = data.events.find(info => info.id == id)

console.log(evento);

const container = document.getElementById("deta");
let html = "";

html =`
<div class="cards card mb-3" style="max-width: 540px;">
<div class="row g-0">
    <div>
    <img src="${evento.image}" class="img-fluid rounded-start" alt="${evento.name}">
    </div>
    <div class="col-md-8">
    <div class="card-body">
        <h5 class="card-title">${evento.name}</h5>
        <p class="card-text">${evento.description}</p>
        <p class="catd-text">date event: ${evento.date}</p>
        <p class="catd-text">place event: ${evento.place}</p>
        <p class="catd-text">capacity event: ${evento.capacity}</p>
        <p class="catd-text">assistance event: ${evento.assistance}</p>
        <p class="catd-text">price event: ${evento.price}</p>
    </div>
    </div>
</div>
</div>
    `
container.innerHTML = html
