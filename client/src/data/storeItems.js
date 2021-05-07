import chair1 from '../assets/chair1.jpg';
import chair2 from '../assets/chair2.jpg';
import chair3 from '../assets/chair3.jpg';
import chair4 from '../assets/chair4.jpg';
import couch1 from '../assets/couch1.jpg';
import stool1 from '../assets/stool1.jpg';
import CATEGORIES from './categories';
import STATUS from './status';

const STORE_ITEMS = [
    {
        id: '1',
        title: 'chair',
        category: CATEGORIES.tablesAndChairs,
        price: '$19.99',
        image: chair1,
        quantity: 1,
        description: 'test description',
        status: STATUS.available
    },
    {
        id: '2',
        title: 'cabinet',
        category: CATEGORIES.storage,
        price: '$29.99',
        image: chair2,
        quantity: 1,
        description: 'test description',
        status: STATUS.available
    },
    {
        id: '3',
        title: 'stool',
        category: CATEGORIES.tablesAndChairs,
        price: '$39.99',
        image: chair3,
        quantity: 1,
        description: 'test description',
        status: STATUS.available
    },
    {
        id: '4',
        title: 'table',
        category: CATEGORIES.tablesAndChairs,
        price: '$49.99',
        image: chair4,
        quantity: 1,
        description: 'test description',
        status: STATUS.available
    },
    {
        id: '5',
        title: 'couch',
        category: CATEGORIES.sofaAndArmchairs,
        price: '$59.99',
        image: couch1,
        quantity: 1,
        description: 'test description',
        status: STATUS.available
    },
    {
        id: '6',
        title: 'bed',
        category: CATEGORIES.sleeping,
        price: '$69.99',
        image: stool1,
        quantity: 1,
        description: 'test description',
        status: STATUS.sold
    },
];

export default STORE_ITEMS;