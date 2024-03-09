
const arr = [
    delayedPromise("1", 1000),
    delayedPromise("2", 2000),
    delayedPromise("3", 1500),
    delayedPromise("4", 3000),
    delayedPromise("5", 500),
];


function delayedPromise(value, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, time);
    });
}



Promise.all(arr)
    .then((ee) => {
        console.log(ee.join(" "));
    })
    .catch((error) => {
        console.error(error);
    });




    function randomDelay(value) {
        const randomTime = Math.floor(Math.random() * 4000) + 1000;
        return new Promise((resolve) => {
            setTimeout(()=> {
                resolve(value)
                console.log(randomTime);
            }, randomTime)
        })
      
    }


    const arr2 = [
        randomDelay("1 promise"),
        randomDelay("apple"),
        randomDelay("green"),
        randomDelay("RTX"),
        randomDelay("world"),
    ];
    
Promise.race(arr2)
.then((ad)=> {
    console.log("Fast Primise in:::::", ad);
})
.catch((error)=> {
    console.error(error);
})