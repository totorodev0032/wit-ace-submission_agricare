import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAyx98YVUE0xncAYsiTNxLxNENxSlJRh2I',
  authDomain: 'mmmutagri.firebaseapp.com',
  databaseURL: 'https://mmmutagri-default-rtdb.firebaseio.com',
  projectId: 'mmmutagri',
  storageBucket: 'mmmutagri.appspot.com',
  messagingSenderId: '777931309538',
  appId: '1:777931309538:web:8b5075e11d865271f539bb',
};

firebase.initializeApp(firebaseConfig);
export default firebase;
