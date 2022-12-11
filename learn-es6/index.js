// function Store() {
//     const aisle = {
//         'fruit': [],
//         'vegetable': [],
//     }
//     return {
//         add: function(category) {
//             let items = [].splice.call(arguments, 1);
//             items.forEach((value, index, array) => {
//                 aisle[category].push(value);
//             });
//         },
//         aisle: aisle,
//     }
// }

function Store() {
    const aisle = {
        'fruit': [],
        'vegetable': [],
    }
    return {
        add: function(category, ...items) {
            items.forEach((value, index, array) => {
                aisle[category].push(value);
            });
        },
        aisle: aisle,
    }
}

const myGroceryStore = new Store();
myGroceryStore.add('fruit', 'Apple', 'Orange');
console.log(myGroceryStore.aisle.fruit);