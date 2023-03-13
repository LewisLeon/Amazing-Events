const filt = document.getElementById("filtro")
filt.addEventListener("keyup", e => {
    if (e.target.matches("#filtro")) {
        if (e.key==="Escape")e.target.value=""
        document.querySelectorAll(".card").forEach(evento => {
            console.log(evento);
            evento.textContent.substring(0,60).toLowerCase().includes(e.target.value.toLowerCase())
            ?evento.classList.remove("filtro")
            :evento.classList.add("filtro")
        })
    }
})