function* greet() {
    console.info("You called 'next()'");
    yield "hello";
}

let greeter = greet(); // nothing
console.log(greeter); // display generator object
let next = greeter.next(); // "You called 'next()'"
// console.log(next); // { value: undefined, done: false } - becase doesnt yield anything

// after add yield in line 3
console.log(next); // { value: 'hello', done: false }

let done = greeter.next();
console.log(done); // { value: undefined, done: true }