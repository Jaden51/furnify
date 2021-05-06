import chair1 from '../assets/chair1.jpg';
import chair2 from '../assets/chair2.jpg';
import chair3 from '../assets/chair3.jpg';
import chair4 from '../assets/chair4.jpg';
import couch1 from '../assets/couch1.jpg';
import lamp1 from '../assets/lamp1.jpg';
import stool1 from '../assets/stool1.jpg';

const STORE_ITEMS = [
    {
        id: 1,
        category: 'Tables and Chairs',
        color: 'orange',
        price: '$19.99',
        image: chair1,
        quantity: 1,
        weight: '100lb',
        location: 'test address',
        createdAt: 'date',
        description: 'test description' 
    },
    {
        id: 2,
        category: 'Tables and Chairs',
        item: 'chair',
        color: 'pink',
        price: '$29.99',
        image: chair2
    },
    {
        id: 3,
        category: 'Tables and Chairs',
        item: 'chair',
        color: 'white',
        price: '$39.99',
        image: chair3
    },
    {
        id: 4,
        category: 'Tables and Chairs',
        item: 'chair',
        color: 'baige',
        price: '$49.99',
        image: chair4
    },
    {
        id: 5,
        category: 'Sofas and Armchairs',
        item: 'couch',
        color: 'green',
        price: '$49.99',
        image: couch1
    }
    {
        id: 7,
        item: 'Kids Furniture',
        color: 'white',
        price: '$79.99',
        image: stool1
    }
];

export default STORE_ITEMS;