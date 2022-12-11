function* greet() {
    let friendly = yield "How";
    console.log(friendly);
    yield "are";
    yield "you?";
}

let greeter = greet();
console.log(greeter.next().value);
console.log(greeter.next("the heck").value);
// console.log(greeter.next().value);

// value passed in next() parameter is being returned in yield when the next next() is run
// and assigned to variable friendly