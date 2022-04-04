const bottol = { 
    color: 'black', 
    price: 250, 
    isClean: true, 
    hold: 'watar' 
};

/*
for(let i=0; i<10; i++){}
for(const num of number){}    >array
for(const num in number){}    >object
*/

for(const prop in bottol){
    console.log(prop, bottol[prop]);
};


for(const [keys, values] of Object.entries(bottol)){
    console.log(keys, values);
}