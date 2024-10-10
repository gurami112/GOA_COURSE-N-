function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let numbers = [2, 4, 7, 9, 11, 13, 15];
let primeCheck = numbers.map(isPrime);

console.log(primeCheck);
