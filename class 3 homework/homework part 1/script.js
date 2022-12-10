function type(input) {
    let determineType = typeof(input);
    console.log(determineType);
    
}

let person;

const car = {type:"Fiat", model:"500", color:"white"};

type(1);

type('Hello');

type((2 + 2) === 4);

type(person);

type(car)
