function* greet() {
    console.info("Generators are lazy"); // #1
    yield "How";
    console.info("I'm not called until the second next"); // #2
    yield "are";
    console.info("Call me before 'you?'"); // #3
    yield "you?";
    console.info("Called when 'done'"); // #4
}

let greeter = greet();
// console.info(greeter.next()); // invoke #1 and print { value: 'How', done: false }
// console.info(greeter.next());
// console.info(greeter.next());
// console.info(greeter.next());

for (let word of greeter) {
    console.info(word); // word is grab greeter yield .value same as greeter.next().value
}