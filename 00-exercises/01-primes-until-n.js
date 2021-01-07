// PRIMES UNTIL N

const n = 100;
var primes = [1];
var isPrime = true;

for (let i = 2; i <= n; i++) {
  for (const prime of primes) {
    if (i % prime == 0 && prime != 1) {
      isPrime = false;
    }
  }
  if (isPrime) {
    primes.push(i);
  } else {
    isPrime = !isPrime;
  }
}

console.log(`Prime Number until ${n}: \n ${primes}`);