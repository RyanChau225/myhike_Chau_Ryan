//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyD4lqdOgFFMogltwKtp0_NsAqe9ibORFcQ",
    authDomain: "fir-comp1800-d3fbd.firebaseapp.com",
    projectId: "fir-comp1800-d3fbd",
    storageBucket: "fir-comp1800-d3fbd.appspot.com",
    messagingSenderId: "538364325885",
    appId: "1:538364325885:web:0d79383caf7ac0d9c0f394",
    measurementId: "G-5DKF6G8WX8"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();