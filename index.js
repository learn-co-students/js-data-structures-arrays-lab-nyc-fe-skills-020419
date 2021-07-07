const drivers = ["Milo","Otis","Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name)
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name)
}

function appendDriver(name) {
  const driversCopy = drivers.slice() 
  driversCopy.push(name)
  return(driversCopy)
}

function prependDriver(name) {
  const driversCopy2 = drivers.slice() 
  driversCopy2.unshift(name)
  return(driversCopy2)
}

function removeLastDriver(name) {
  const driversCopy3 = drivers.slice() 
  driversCopy3.pop(name)
  return(driversCopy3)
}

function removeFirstDriver(name) {
  const driversCopy4 = drivers.slice() 
  driversCopy4.shift(name)
  return(driversCopy4)
}




