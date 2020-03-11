const items = [
    {name:'Bike', price: 100 },
    {name:'TV', price: 200 },
    {name:'Album', price: 10 },
    {name:'Book', price: 5 },
    {name:'Phone', price: 500 },
    {name:'Computer', price: 1000 },
    {name:'Keyboard', price: 25 }
];

const getNameTotal = items.reduce((currentValue, item) => {
    return item.name + currentValue;
}, 0);

const filteredItems =  items.filter((item) => {
    return item.price <= 100
});

const itemNames = items.map( (item) => {
    return item.price;
});

const foundItem = items.find((item) => {
    return item.name === 'Book';
});

items.forEach((item) => {
    console.log(item.name);
});

const hasInexpensiveItems = items.some((item) => {
   return item.price <= 100;
});

const hasInexpensiveItemsEvery = items.every((item) => {
    return item.price <= 100;
});

const total = items.reduce((currentTotal, item) =>{
    return item.price + currentTotal;
}, 0);

const variable = items.filter((item) => {
    return item.name === 'Book';
});

items.forEach((item) => {
    console.log(item.price);
});



const myArray = [1, 2, 3, 4, 5, 5, 1, 2];

const mySet = new Set(myArray);
mySet.add({channelName: 'JavaScript Mastery'});

const uniqueArray = [...mySet];

console.log(myArray);
console.log(mySet);
//console.log(uniqueArray);



