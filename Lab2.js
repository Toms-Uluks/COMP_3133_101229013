const greeter = (myArray) => {

    myArray.map(name => {
        console.log(`Hello ${name}`);
    })
}

greeter(['Randy savage', 'Rick Flair', 'Hulk Hogan'])


const cap = ([first, ...rest]) => {
    return first.toUpperCase() + rest.join('')

}
console.log(cap('apple'))


const capArray = () => {
    const words = ['red', 'blue', 'green'];

    return words.map(cap)
}
console.log(capArray());


const filterLessThan20 = () => {
    const values = [20, 15, 60, 7, 1]

    return values.filter(value => value < 20)
}
console.log(filterLessThan20());

class car {
    constructor(
        model,
        year
    ) {
        this.model = model;
        this.year = year
    }
    
    details() {
        console.log(`Model: ${this.model} Engine ${this.year}`)
    }
}

class sedan extends car {
    constructor(
        model,
        balance
    ) {
        super(car)
        this.model = model
        this.balance = balance
    }

    info() {
        console.log(`${this.model} has a balance of ${this.balance}`)
    }
}

const newCar = new car('Pontiac Firebird', 1976);
newCar.details();

const newSedan = new sedan('Pontiac Firebird', 30000);
newSedan.info();
