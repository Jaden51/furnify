// Object Destructuring

const person = {
    name: 'Jaden',
    age: 18,
    location: {
        city: 'Newmarket',
        temp: 22
    }
};

const { name: firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;

if (city && temperature) {
    console.log(`It is ${temperature} in ${city}.`);
}

const book = {
    title: 'Dark Disciple',
    author: 'Christie Golden',
    publisher: {
        name: 'Star Wars'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);

// Array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [ , city, state] = address;

console.log(`You are in ${city} ${state}.`)