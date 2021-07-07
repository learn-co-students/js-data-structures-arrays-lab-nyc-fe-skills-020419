const drivers = [
  "Milo",
  "Otis",
  "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop()
}

function destructivelyRemoveFirstDriver(name){
  drivers.shift(name)
}

function appendDriver(name){
  let driverscopy = [...drivers]
  driverscopy.push(name)
  return driverscopy
}

function prependDriver(name){
  let driverscopy = [...drivers]
  driverscopy.unshift(name)
  return driverscopy
}


function removeLastDriver(name) {
  let driverscopy = [...drivers]
  driverscopy.pop()
  return driverscopy
}

function removeFirstDriver(name) {
  let driverscopy = [...drivers]
  driverscopy.shift()
  return driverscopy
}







  





