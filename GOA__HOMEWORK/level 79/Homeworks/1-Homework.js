function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

let number = 5;
let result = factorial(number);
console.log(result);
