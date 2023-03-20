const table1 = document.getElementById("1")
const table2 = document.getElementById("2")
const table3 = document.getElementById("3")

fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then((Response)=> Response.json())
.then((datos)=> {
    /* console.log(datos) */
    filtradoFechas(datos)
})

/* creador de tablas para stats */ function tabla1(porceMayor,evento1,porceMenor,evento2,mayorCap,evento3) {
    let cont = ""
    cont += `
    <td>${evento1}  (${porceMayor}%)</td>
    <td>${evento2}  (${porceMenor}%)</td>
    <td>${evento3}  (${mayorCap})</td>`
    table1.innerHTML = cont
}

/* creador de tablas para stats */ function tabla2(categorias,eve,rev) {
    let cont = ""
    let i = 0
    /* console.log(eve); */
    /* console.log(rev); */
    categorias.forEach(cat => {
        cont +=`
        <tr>
            <td>${cat}</td>
            <td>$${rev[i]}</td>
            <td>${eve[i]}%</td>
        </tr>`
        i++
})
    table2.innerHTML = cont
}

/* creador de tablas para stats */ function tabla3(categorias,eve,rev) {
    let cont = ""
    let i = 0
    /* console.log(eve); */
    /* console.log(rev); */
    categorias.forEach(cat => {
        cont +=`
        <tr>
            <td>${cat}</td>
            <td>$${rev[i]}</td>
            <td>${eve[i]}%</td>
        </tr>`
        i++
})
    table3.innerHTML = cont
}

/* calculador de tabla 1 */ function calculador1(data) {
    let porceMayor =0
    let porceMenor =100
    let mayorCap = 0
    let evento1,evento2,evento3 = ""
    data.forEach(eventos => {
        let asistencia = eventos.assistance
        let capacidad = eventos.capacity
        let porcentaje = (asistencia/capacidad)*100
        if (capacidad > mayorCap) {
            mayorCap = capacidad
            evento3 = eventos.name
            /* console.log(evento3); */
        }
        if (porcentaje > porceMayor) {
            porceMayor = porcentaje
            evento1 = eventos.name
            /* console.log(evento1); */
        }
        if (porcentaje < porceMenor) {
            porceMenor = porcentaje
            evento2 = eventos.name
            /* console.log(evento2); */
        }
    });
    tabla1(porceMayor,evento1,porceMenor,evento2,mayorCap,evento3)
/*     console.log(porceMayor);
    console.log(porceMenor); */
}

/* calculador de tabla 2 */ function calculador2(data) {
/*     console.log(data); */
    let cat = []
    data.forEach(eventos => {
        cat.push(eventos.category)
    });
let setSinRepetidos = new Set(cat);
let categorias = Array.from(setSinRepetidos);
let eventosCat1 = []
let eventosCat2 = []
let eventosCat3 = []
let eventosCat4 = []
let eventosCat5 = []
let eventosCat6 = []
    data.forEach(element => {
        if (element.category == categorias[0]) {
            eventosCat1.push(element)
        }
        if (element.category == categorias[1]) {
            eventosCat2.push(element)
        }
        if (element.category == categorias[2]) {
            eventosCat3.push(element)
        }
        if (element.category == categorias[3]) {
            eventosCat4.push(element)
        }
        if (element.category == categorias[4]) {
            eventosCat5.push(element)
        }
        if (element.category == categorias[5]) {
            eventosCat6.push(element)
        }
    });
    let revenues1 = 0
    eventosCat1.forEach(evento => {
        revenues1 += evento.price * evento.capacity
    })
    let revenues2 = 0
    eventosCat2.forEach(evento => {
        revenues2 += evento.price * evento.capacity
    })
    let revenues3 = 0
    eventosCat3.forEach(evento => {
        revenues3 += evento.price * evento.capacity
    })
    let revenues4 = 0
    eventosCat4.forEach(evento => {
        revenues4 += evento.price * evento.capacity
    })
    let revenues5 = 0
    eventosCat5.forEach(evento => {
        revenues5 += evento.price * evento.capacity
    })
    let revenues6 = 0
    eventosCat6.forEach(evento => {
        revenues6 += evento.price * evento.capacity
    })
    let asistencia = 0
    let capacidad = 0
    eventosCat1.forEach(evento => {
        asistencia = asistencia+evento.estimate
        capacidad = capacidad+evento.capacity
        eventosCat1 = (asistencia/capacidad)*100
    })
    asistencia= 0
    capacidad = 0
    eventosCat2.forEach(evento => {
        asistencia = asistencia+evento.estimate
        capacidad = capacidad+evento.capacity
        eventosCat2 = (asistencia/capacidad)*100
    })
    asistencia= 0
    capacidad = 0
    eventosCat3.forEach(evento => {
        asistencia = asistencia+evento.estimate
        capacidad = capacidad+evento.capacity
        eventosCat3 = (asistencia/capacidad)*100
    })
    asistencia= 0
    capacidad = 0
    eventosCat4.forEach(evento => {
        asistencia = asistencia+evento.estimate
        capacidad = capacidad+evento.capacity
        eventosCat4 = (asistencia/capacidad)*100
    })
    asistencia= 0
    capacidad = 0
    eventosCat5.forEach(evento => {
        asistencia = asistencia+evento.estimate
        capacidad = capacidad+evento.capacity
        eventosCat5 = (asistencia/capacidad)*100
    })
    asistencia= 0
    capacidad = 0
    eventosCat6.forEach(evento => {
        asistencia = asistencia+evento.estimate
        capacidad = capacidad+evento.capacity
        eventosCat6 = (asistencia/capacidad)*100
    })
    let eve = [
        eve1= eventosCat1,
        eve2= eventosCat2,
        eve3= eventosCat3,
        eve4= eventosCat4,
        eve5= eventosCat5,
        eve6= eventosCat6,
    ]
    let rev = [
        rev1= revenues1,
        rev2= revenues2,
        rev3= revenues3,
        rev4= revenues4,
        rev5= revenues5,
        rev6= revenues6,
    ]
    tabla2(categorias,eve,rev)
}

/* calculador de tabla 3 */ function calculador3(data) {
/*     console.log(data); */
    let cat = []
    data.forEach(eventos => {
        cat.push(eventos.category)
    });
let setSinRepetidos = new Set(cat);
let categorias = Array.from(setSinRepetidos);
let eventosCat1 = []
let eventosCat2 = []
let eventosCat3 = []
let eventosCat4 = []
let eventosCat5 = []
let eventosCat6 = []
let eventosCat7 = []
    data.forEach(element => {
        if (element.category == categorias[0]) {
            eventosCat1.push(element)
        }
        if (element.category == categorias[1]) {
            eventosCat2.push(element)
        }
        if (element.category == categorias[2]) {
            eventosCat3.push(element)
        }
        if (element.category == categorias[3]) {
            eventosCat4.push(element)
        }
        if (element.category == categorias[4]) {
            eventosCat5.push(element)
        }
        if (element.category == categorias[5]) {
            eventosCat6.push(element)
        }
        if (element.category == categorias[6]) {
            eventosCat7.push(element)
        }
    });
    let revenues1 = 0
    eventosCat1.forEach(evento => {
        revenues1 += evento.price * evento.assistance
    })
    let revenues2 = 0
    eventosCat2.forEach(evento => {
        revenues2 += evento.price * evento.assistance
    })
    let revenues3 = 0
    eventosCat3.forEach(evento => {
        revenues3 += evento.price * evento.assistance
    })
    let revenues4 = 0
    eventosCat4.forEach(evento => {
        revenues4 += evento.price * evento.assistance
    })
    let revenues5 = 0
    eventosCat5.forEach(evento => {
        revenues5 += evento.price * evento.assistance
    })
    let revenues6 = 0
    eventosCat6.forEach(evento => {
        revenues6 += evento.price * evento.assistance
    })
    let revenues7 = 0
    eventosCat7.forEach(evento => {
        revenues7 += evento.price * evento.assistance
    })
    let asistencia = 0
    let capacidad = 0
    eventosCat1.forEach(evento => {
        asistencia = asistencia+evento.assistance
        capacidad = capacidad+evento.capacity
        eventosCat1 = (asistencia/capacidad)*100
    })
    asistencia= 0
    capacidad = 0
    eventosCat2.forEach(evento => {
        asistencia = asistencia+evento.assistance
        capacidad = capacidad+evento.capacity
        eventosCat2 = (asistencia/capacidad)*100
    })
    asistencia= 0
    capacidad = 0
    eventosCat3.forEach(evento => {
        asistencia = asistencia+evento.assistance
        capacidad = capacidad+evento.capacity
        eventosCat3 = (asistencia/capacidad)*100
    })
    asistencia= 0
    capacidad = 0
    eventosCat4.forEach(evento => {
        asistencia = asistencia+evento.assistance
        capacidad = capacidad+evento.capacity
        eventosCat4 = (asistencia/capacidad)*100
    })
    asistencia= 0
    capacidad = 0
    eventosCat5.forEach(evento => {
        asistencia = asistencia+evento.assistance
        capacidad = capacidad+evento.capacity
        eventosCat5 = (asistencia/capacidad)*100
    })
    asistencia= 0
    capacidad = 0
    eventosCat6.forEach(evento => {
        asistencia = asistencia+evento.assistance
        capacidad = capacidad+evento.capacity
        eventosCat6 = (asistencia/capacidad)*100
    })
    asistencia= 0
    capacidad = 0
    eventosCat7.forEach(evento => {
        asistencia = asistencia+evento.assistance
        capacidad = capacidad+evento.capacity
        eventosCat7 = (asistencia/capacidad)*100
    })
    let eve = [
        eve1= eventosCat1,
        eve2= eventosCat2,
        eve3= eventosCat3,
        eve4= eventosCat4,
        eve5= eventosCat5,
        eve6= eventosCat6,
        eve7= eventosCat7,
    ]
    let rev = [
        rev1= revenues1,
        rev2= revenues2,
        rev3= revenues3,
        rev4= revenues4,
        rev5= revenues5,
        rev6= revenues6,
        rev7= revenues7,
    ]
    tabla3(categorias,eve,rev)
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
    calculador1(eventos.EventPast)
    calculador2(eventos.EventUpcoming)
    calculador3(eventos.EventPast)
    //console.log(eventos.EventPast);
    //console.log(eventos.EventUpcoming);
    }