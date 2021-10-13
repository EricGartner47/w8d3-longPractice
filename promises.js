/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

// const num1 = () => {
//     return 47;
// }

// async function num2() {
//     return 48;
// }

// console.log('num1', num1());
// console.log('num2', num2());

// num2().then(result => console.log(result));

/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

// async function num3() { //why did it not print "Promise"
// - when using await, return value is the fulfilled value of promise
//     const value = await num2();
//     console.log('num3', value)
// }

// num3()


/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

// async function awaitingPromise() {
//     const p = new Promise((resolve)=> {
//         setTimeout(()=> {
//             resolve("I'm a promise")
//         }, 2000)
//     });
//     const res = await p;
//     console.log('my promise is', res)
// }

// awaitingPromise()


/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

// new Promise((resolve)=> {
//     setTimeout(()=> {
//         resolve('done!')
//     }, 1500)
// }).then(r => console.log('then my other promise is', r))



/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

// Your code here



/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

// Your code here



/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here



/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here
