//Asynchronous js and Synchronous
// SYNCH JS
// Synchronous js -->> line by line chalta hai matlab ek baad dusra hoga jab tak ek command complete na ho dusra nhi chelaga nhi hoga

// ASYNC JS
// Asynchronous -->> ka matlab saare kaam ek sath suru karde jaiska ans aagay uska jawaab dedena

// setTimeout - settimeout ka code kuchh der baad chalta hai

console.log(1);
setTimeout(() => {
    console.log("Learning setTimeout..!!!");
}, 3000);
console.log(2);