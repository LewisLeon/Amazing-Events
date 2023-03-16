let dateB= data.currentDate
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
data.events.forEach((dat) => {
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