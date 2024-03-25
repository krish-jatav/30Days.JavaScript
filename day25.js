const coding = ["apple", "banana", "orange", "mango", "grapes"]

// coding.forEach(function(elm) {
//     console.log(elm);
// })

// coding.forEach((item) => {
//     console.log(item);
// })


// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [{
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item, index, arr) => {

    console.log(item.languageFileName == "py",
        index, );
})