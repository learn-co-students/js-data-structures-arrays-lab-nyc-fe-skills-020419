// Write your solution here!
const drivers =  ["Milo", "Otis", "Garfield"]

 function destructivelyAppendDriver(name) {
        drivers.push('Ralph')
 }

function destructivelyPrependDriver(name) {
        drivers.unshift('Bob')
}

function destructivelyRemoveLastDriver(name) {
        drivers.pop()
}

function destructivelyRemoveFirstDriver(name) {
        drivers.shift()
}


function appendDriver(name) {
     let driverscopy = drivers.slice()
     driverscopy.push(name)
     return driverscopy
}

function prependDriver(name) {
     let driverscopy2 = drivers.slice()
     driverscopy2.unshift(name)
     return driverscopy2
}

function removeLastDriver(name) {
    let driverscopy3 = drivers.slice()
    driverscopy3.pop(name)
    return driverscopy3
}

function removeFirstDriver(name) {
   let driverscopy4 = drivers.slice()
   driverscopy4.shift(name)
   return driverscopy4
}
