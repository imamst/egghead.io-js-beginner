function* graph() {
    let x = 0;
    let y = 0;
    while (true) {
        yield {x: x, y: y};
        x += 2;
        y += 2;
    }
}

let graphGenerator = graph();
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);