let promise = new Promise((resolve, reject) => {
    // # 1
    // throw new Error('error thrown!');

    setTimeout(() => {
        if (true) {
            resolve("success");
        } else {
            reject("error");
        }
    }, 2000)
});

promise.then(data => data + 1 )
        .then(data => { 
            console.info(data + 2)
            // # 2
            throw new Error('error thrown!'); 
        })
        .catch(error => console.error(error));

// "then" callback will be invoked if resolved
// "catch" callback wiill be invoked if rejected instead
// second "then" callback arguments is feed from its previous "then" return value
// in # 1 place, error will immediately invoke "catch" callback
// in # 2 place, will invoke "catch" after "then" callback
