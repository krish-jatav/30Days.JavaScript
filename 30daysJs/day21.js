// Higher oder function

function multipleGreet(func, count) {
    for (let i = 1; i <= count; i++) {
        func();
    }
}
let greet = function() {
    console.log("hello");
}

multipleGreet(greet, 10);