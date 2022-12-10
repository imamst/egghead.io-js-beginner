// Array like doesnt have all function that actual array have, prototype?
// example forEach() function cannot be invoked from arguments array of function

// function myFunc() {
//     console.log(arguments.length);
//     arguments.forEach(element => {
//         console.log(element); // error forEach is not a function
//     });
// }

// myFunc(1, 2, 5);


// -------------------------------------------------

// Implement rest operator using splice call hack in ES5
function Store() {
    let aisle = {
        fruit: [],
        vegetable: [],
    }
    return {
        add: function (category) {
            // remove first index of arguments and keep the rest
            let items = [].splice.call(arguments, 1);
            items.forEach((value, index, array) => {
                aisle[category].push(value);
            })
        },
        aisle: aisle
    }
}


// ---------------------------------------------------------------

// Rest parameter return an actual array, not array like

function Store() {
    let aisle = {
        fruit: [],
        vegetable: [],
    }
    return {
        add: function (category, ...items) {
            items.forEach((value, index, array) => {
                aisle[category].push(value);
            })
        },
        aisle: aisle
    }
}

const myGroceryStore = new Store();
myGroceryStore.add('fruit', 'Apple', 'Banana');
console.log(myGroceryStore.aisle);