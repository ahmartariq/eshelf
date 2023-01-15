// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import { getAuth} from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'firebase/compat/storage';
import {initializeAuth,getReactNativePersistence,} from 'firebase/auth/react-native';


const firebaseConfig = {
  apiKey: "AIzaSyCegjHOgpeEc93-WA6OsRIAS8qxL2AD8Tc",
  authDomain: "eshelf-3e423.firebaseapp.com",
  projectId: "eshelf-3e423",
  storageBucket: "eshelf-3e423.appspot.com",
  messagingSenderId: "878799512155",
  appId: "1:878799512155:web:563687c14c13680563157e",
  measurementId: "G-7HMPTWDTDJ"
};


const app = firebase.initializeApp(firebaseConfig);
var auth = initializeAuth(app, {
	persistence: getReactNativePersistence(AsyncStorage),
});
auth = getAuth(app);
const db = getDatabase(app);
export { auth, db };