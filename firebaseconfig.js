import app from 'firebase/app';
import 'firebase/auth';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDa29GWAYmBAuPEE7gxgVepxYYr6JAyfMQ',
  authDomain: 'food-delivery-7d366.firebaseapp.com',
  databaseURL: 'https://food-delivery-7d366.firebaseio.com',
  projectId: 'food-delivery-7d366',
  storageBucket: 'food-delivery-7d366.appspot.com',
  messagingSenderId: '764984527369',
  appId: '1:764984527369:web:fd350080c03f2b0b74c6d8',
  measurementId: 'G-VXH4R3P1R1'
};

// class Firebase {
//   constructor() {
//     app.initializeApp(firebaseConfig);
//     this.auth = app.auth();
//   }
// }

firebase.initializeApp(firebaseConfig);
export default firebase;

// export default Firebase;
