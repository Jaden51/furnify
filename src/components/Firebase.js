import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCDOi0t0m0y5HujtISqNVG9N2kiOJU6kFs",
    authDomain: "furniture-seller.firebaseapp.com",
    databaseURL: "https://furniture-seller.firebaseio.com",
    projectId: "furniture-seller",
    storageBucket: "furniture-seller.appspot.com",
    messagingSenderId: "1097053025618",
    appId: "1:1097053025618:web:55a3555a31d59748b2f68b",
    measurementId: "G-ZSKHZN1686"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().set({
    name: 'Jaden Hums',
    age: 18,
    isSingle: false,
    location: {
        city: 'Newmarket',
        country: 'Canada'
    }
});

database.ref('attributes').set({
    height: 70,
    weight: 140
});