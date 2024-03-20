// forEach method.......>>>>>>>>>>>>

// const array = [2, 3, 5];

// array.forEach((currentValue, index, array) => {
//     console.log(`Current Value: ${currentValue}`);
//     console.log(`Index: ${index}`);
//     console.log(`Array: ${array}`);
// });

let ans = new Promise((res, rej) => {
    if (false) {
        return res();
    } else {
        return rej();
    }
});
ans.then(function() {
        console.log("chalgaya")
    })
    .catch(function() {
        console.log("rej ho gaya")
    });