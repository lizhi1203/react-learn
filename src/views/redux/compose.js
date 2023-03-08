function add(x, y) {
  return x + y
}

function addX(x) {
  return function(y) {
    return x + y;
  }
}

console.log(add(1, 3))
console.log(addX(1)(3))

let addTen = addX(10)
console.log(addTen(2))