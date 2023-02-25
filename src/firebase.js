
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBK8hVp8440WjDor5KBDFWMuMaQiE7tIfY",
  authDomain: "codein-313f7.firebaseapp.com",
  projectId: "codein-313f7",
  storageBucket: "codein-313f7.appspot.com",
  messagingSenderId: "515947713993",
  appId: "1:515947713993:web:e52c39ff77512adf198418"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;