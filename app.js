// 1. Closures
console.log("Closures Example:");
function createCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}

const counter1 = createCounter();
counter1(); // 1
counter1(); // 2