let dateB= data.currentDate
aux1= dateB.split('')
let aux2 = String.prototype.concat(aux1[0],aux1[1],aux1[2],aux1[3])
let aux3 = String.prototype.concat(aux1[5],aux1[6])
let aux4 = String.prototype.concat(aux1[8],aux1[9])

let dateCurrent ={
    year: parseInt(aux2),
    month: parseInt(aux3),
    day: parseInt(aux4)
}
console.log(dateCurrent)
let aux
let date
let category={
    "Food Fair":[],
    "Museum":[],
    "Costume Party":[],
    "Music Concert":[],
    "Race":[],
    "Book Exchange":[],
    "Cinema":[]
}
let eventos={
    upcoming:[],
    past:[]
}
for (let i =0; i < data.events.length;i++){
    aux = data.events[i].date
    aux1 = aux.split('')
    aux2 = String.prototype.concat(aux1[0],aux1[1],aux1[2],aux1[3])
    aux3 = String.prototype.concat(aux1[5],aux1[6])
    aux4 = String.prototype.concat(aux1[8],aux1[9])
    date ={
        year: parseInt(aux2),
        month: parseInt(aux3),
        day: parseInt(aux4)
    }
    if (date.year < dateCurrent.year){
        eventos.past.push(data.events[i].name)
    } else if (date.year > dateCurrent.year){
        eventos.upcoming.push(data.events[i].name)
    } else{
        if (date.month < dateCurrent.month){
            eventos.past.push(data.events[i].name)
        } else if (date.month > dateCurrent.month){
            eventos.upcoming.push(data.events[i].name)
        } else{
            if (date.day < dateCurrent.day){
                eventos.past.push(data.events[i].name)
            } else if (date.day > dateCurrent.day){
                eventos.upcoming.push(data.events[i].name)
            }
        }
    }
    switch(data.events[i].category){
        case "Cinema": 
            category.Cinema.push(data.events[i]._id)
            break;
        case "Food Fair":
            category["Food Fair"].push(data.events[i]._id)
            break;
        case "Museum":
            category.Museum.push(data.events[i]._id)
            break;
        case "Costume Party":
            category["Costume Party"].push(data.events[i]._id)
            break;
        case "Music Concert":
            category["Music Concert"].push(data.events[i]._id)
            break;
        case "Race":
            category.Race.push(data.events[i]._id)
            break;
        case "Book Exchange":
            category["Book Exchange"].push(data.events[i]._id)
            break;
    }
}
console.table(category)
console.table(eventos)