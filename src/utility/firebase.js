import { initializeApp } from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDy-R2QpwT-Q0EBo34DtCr-nqOFDgL4SWU",
  authDomain: "recipeapp-f887c.firebaseapp.com",
  projectId: "recipeapp-f887c",
  storageBucket: "recipeapp-f887c.appspot.com",
  messagingSenderId: "611554490480",
  appId: "1:611554490480:web:59748b1c3d8d5ce6229cb5",
  measurementId: "G-841H9C96Y3"
};
const app = initializeApp(firebaseConfig)

export { auth }