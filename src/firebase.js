// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwquqrFkAx9EmIRmNY8fKxILuQqPFficE",
  authDomain: "my-crafts-e645d.firebaseapp.com",
  projectId: "my-crafts-e645d",
  storageBucket: "my-crafts-e645d.firebasestorage.app",
  messagingSenderId: "1062814347443",
  appId: "1:1062814347443:web:06086080a86522e99e80c6",
  measurementId: "G-5BEHM9B82D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };