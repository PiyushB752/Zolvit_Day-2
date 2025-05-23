function add(a=0,b=0){
  if(typeof a!=="number" || typeof b !=="number"){
    return 0
  } else {
    return a + b;
  }
}

function subtract(a=0,b=0){
  if(typeof a!=="number" || typeof b !=="number"){
    return 0
  } else{
    return a - b;
  }
}

function multiply(a=0,b=0){
  if(typeof a!=="number" || typeof b !=="number"){
    return 0
  } else {
    return a * b;
  }
}

function divide(a=0,b=0){
  if(typeof a!=="number" || typeof b !=="number"){
    return 0
  } else if(a===0 && b===0){
    return "Undefined"
  } else if(b===0){
    return "Cannot be divided by 0"
  } else{
    return a / b;
  }
}

export default {add,subtract,multiply,divide}
