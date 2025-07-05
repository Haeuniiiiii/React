// 첫번째
// function add(a,b){import {add,minus} from "./cal.js" // esm 확장자 .js를 붙여줘야 함!

console.log(add(1,2));
console.log(minus(2,1));
//     return a+b;
// }

// function minus(a,b){
//     return a+b;
// }

// 두번째
import {add,minus} from "./cal.js" // esm 확장자 .js를 붙여줘야 함!

console.log(add(1,2));
console.log(minus(2,1));