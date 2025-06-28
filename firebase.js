// firebase.js

const firebaseConfig = {
  apiKey: "AIzaSyATbU_aqE5PSsAwDE7OPsMwa0OOIwt_oh4",
  authDomain: "cruise-ship-management-s-c4e08.firebaseapp.com",
  projectId: "cruise-ship-management-s-c4e08",
  storageBucket: "cruise-ship-management-s-c4e08.firebasestorage.app",
  messagingSenderId: "589803189735",
  appId: "1:589803189735:web:571b16f4dc36efc8d37942",
  measurementId: "G-4WBNX6BQM6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// ✅ Make Firebase services globally accessible
const db = firebase.firestore();
const auth = firebase.auth();


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
