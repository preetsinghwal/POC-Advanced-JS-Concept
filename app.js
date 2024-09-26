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

// 2. Promises & Async/Await
console.log("\nPromises and Async/Await Example:");
function fetchDataWithPromise(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(data) {
                resolve("Promise is resolved");
            } else {
                reject('Promise is rejected');
            }
        }, 2000);
    });
}

fetchDataWithPromise(true).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})


// 3. Prototypes and Inheritance
console.log("\nPrototypes Example:");
function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound.`);
};
const dog = new Animal('Dog');
const cat = new Animal('Cat');
dog.speak(); // Dog makes a sound.
cat.speak(); // Cat makes a sound.

// 4. Currying
console.log("\nCurrying Example:");
function multiply(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        };
    };
}
console.log(multiply(2)(3)(4)); // 24

// 5. Event Loop
console.log("\nEvent Loop Example:");
console.log('Start');
setTimeout(() => {
    console.log('Timeout');
}, 0);
Promise.resolve().then(() => {
    console.log('Promise');
});
console.log('End');

// 6. Debouncing
console.log("\nDebouncing Example:");
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

const handleResize = debounce(() => {
    console.log('Resized!');
}, 300);
window.addEventListener('resize', handleResize);


// 7. Generators
console.log("\nGenerators Example:");
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}
const gen = idGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2


// 8. Destructuring

let listOfFruits = ['Apple', 'Banana', 'Mango', 'Guava', 'Kiwi'];
const [a, b, c, d, e] = listOfFruits;
console.log(a);

let obj = {...listOfFruits};
console.log(obj);