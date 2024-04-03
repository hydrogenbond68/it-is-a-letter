console.log('moringa'.slice(0, 7));
// const num = 23;
// console.log(num.toFixed(4));


function capitalize(str) {
    // console.log(str[0].toUpperCase);
    // console.log(str.charAt(0).toUpperCase);
    // console.log(str.slice(3));
    // console.log(str.split(' ').map(word) => word.charAt(0).toUpperCase() + word.slise(1));
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize('tony stark'));
console.log(capitalize('hp'));


//2. Arrow functions
// syntax
const lastName = 'john';
const capitalizeFirstLetter = (str)=> {
    str.charAt(0).toUpperCase() + str.slice(1);

console.log(capitalizeFirstLetter(lastName));
}









function sum(numOne, numTwo) {
    return numOne + numTwo;
}

console.log(sum(9, 3));

const buildPerson = (fullName, address) => {
return {
    fullName: fullName
    address: address
};
};

// collection of data rep in key/value pairs separated by comma
const car = {
    model: 'Audi',
    owner: {
        fullName: 'john Doe',
    },
    yearOfManufacture: 2020,
    previouslyOwned: true,
previousowners: ['jane', 'john']
}
console.log(
    buildPerson('Tony Stack',  {
        county: 'Nairobi',
    })
)