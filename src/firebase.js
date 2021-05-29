import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyBIzV2gOC_MFEN8DCddpRmJqIeNceC_LRE",
    authDomain: "twf-demo.firebaseapp.com",
    projectId: "twf-demo",
    storageBucket: "twf-demo.appspot.com",
    messagingSenderId: "958432941617",
    appId: "1:958432941617:web:53928d14418f77f035a710",
    measurementId: "G-QRVKMQKR1H"
  };
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default fire