const bottol = {color:'black', price: 250, isClean: true, hold: 'watar'};

const keys = Object.keys(bottol);
console.log(keys);

const value = Object.values(bottol);
console.log(value);

const pairs = Object.entries(bottol);
console.log(pairs);

// Object.seal(bottol);
Object.freeze(bottol);
bottol.price = 300;
bottol.height = 16;
delete bottol.isClean;
console.log(bottol);


