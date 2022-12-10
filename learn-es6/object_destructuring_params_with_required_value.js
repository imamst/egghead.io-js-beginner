// Map & WeakMap

function ajax({
    type = "get",
    url = requiredParams("url"),
    data = {},
    success = requiredParams("success"),
    error = () => {},
    isAsync = true} = {}) {
    console.log(JSON.stringify({type, url, data, success, error, isAsync}, null, 2));
}

function requiredParams(name) {
    throw new Error(`Missing parameter ${name}`)
}

try {
    ajax({});
} catch (error) {
    console.warn(error.message);
}