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

const storage = firebase.storage();

export { storage, database, firebase as default }

// database.ref('furniture').push({
//     image: about,
//     description: 'chair'
// })

// database.ref('furniture').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

// database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'Jaden Hums',
//     age: 18,
//     stressLevel: 3,
//     job: {
//         title: 'Software Engineer',
//         company: 'Google'
//     },
//     isSingle: false,
//     location: {
//         city: 'Newmarket',
//         country: 'Canada'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// })

// database.ref().update({
//     'location/city': 'Seattle',
//     'location/country': 'United States',
//     'job/company': 'Amazon',
//     stressLevel: 9
// });

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Data was removed');
//     }).catch((e) => {
//         console.log('Data was not removed', e);
//     })