
function fibonacci (x) {
  if (x <= 1) {
    return 1;
  }
  
  console.log(x);
  
  return fibonacci(x - 1) + fibonacci(x - 2);
}

let toto = fibonacci(13);

console.log(toto);
