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

// new Promise((resolve)=> {
//     setTimeout(()=> {
//         resolve('done!')
//     }, 1500)
// }).then()

/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// // console.log(wait(1000))

// async function add(a,b){
//     wait(2000)
//     return a+b;
// }

// console.log(add(1,2))

/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

const tryRandomPromise = (random) => new Promise((resolve, reject) => {
    if (random > 0.5) {
        resolve('success!!!');
    } else {
        reject('random error');
    }
});

// console.log(tryRandomPromise(1))
// console.log(tryRandomPromise(0))


// for (let i = 1; i < 10; i++) {
//     const random = Math.random();
//     wait(2000 + random * 1000)
//         .then(()=>tryRandomPromise(random))
//         .then(result => console.log('random try #', i, result))
//         .catch(error => console.error('random try #', i, error));
// }

// for (let i = 1; i < 10; i++) {
//     const random = Math.random();
//         tryRandomPromise(random)
//         .then(result => console.log('random try #', i, result))
//         .catch(error => console.error('random try #', i, error));
// }

/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

const tryTryAgain = async (i) => {
    const random = Math.random();

    // no need for try-catch if there's no possibility of error (rarely happens)
    await wait(3000 + random * 1000);

    // usually you need to wrap the await to gracefully handle the error
    try {
        const result = await tryRandomPromise(random);
        console.log('random again #', i, result);
    } catch (error) {
        console.error('random again #', i, error);
    }
};

// console.log(tryTryAgain(1))
// console.log(tryTryAgain(0))

for (let i = 1; i < 10; i++) {
    tryTryAgain(i);
}

/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */
console.log('END OF PROGRAM')
