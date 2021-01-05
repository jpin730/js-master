// PRIMES UNTIL N

// const n = 100;
// var primes = [1];
// var isPrime = true;

// for (let i = 2; i <= n; i++) {
//   for (const prime of primes) {
//     if ( i % prime == 0 && prime != 1) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     primes.push(i);
//   } else {
//     isPrime = !isPrime;
//   }
// }

// console.log(`Prime Number until ${n}: \n ${primes}`);

// ALTERNATIVE SERIES {1...9} THAT ADD 100

// var serie = "";
// var sum = 0;
// const opt = ["+", "", "-"];

// for (let item1 = 1; item1 < 3; item1++) {
//   for (let item2 = 0; item2 < 3; item2++) {
//     for (let item3 = 0; item3 < 3; item3++) {
//       for (let item4 = 0; item4 < 3; item4++) {
//         for (let item5 = 0; item5 < 3; item5++) {
//           for (let item6 = 0; item6 < 3; item6++) {
//             for (let item7 = 0; item7 < 3; item7++) {
//               for (let item8 = 0; item8 < 3; item8++) {
//                 for (let item9 = 0; item9 < 3; item9++) {
//                   serie =
//                   ` ${opt[item1]}1 ${opt[item2]}2 ${opt[item3]}3
//                     ${opt[item4]}4 ${opt[item5]}5 ${opt[item6]}6
//                     ${opt[item7]}7 ${opt[item8]}8 ${opt[item9]}9 `;
//                   serie = serie.replace(/\s/g,"")
//                   sum = eval(serie);
//                   if (sum == 100) {
//                     console.log(`${serie} = ${sum}`)
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }