import { initializeApp } from 'firebase/app'
import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
 } from 'firebase/auth'
 import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
 } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDnLFMCY99JEYiO2IQwETP2FqKD2a9rmkE",
    authDomain: "tendenceb-d91e8.firebaseapp.com",
    databaseURL: "https://tendenceb-d91e8-default-rtdb.firebaseio.com",
    projectId: "tendenceb-d91e8",
    storageBucket: "tendenceb-d91e8.appspot.com",
    messagingSenderId: "1006823962313",
    appId: "1:1006823962313:web:1584ea76c343a77ebeff18",
    measurementId: "G-RW7VXWYRRL"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({ 
      prompt: 'select_account' 
    });
    


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
        
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.error('Error creating user document', error.message);
        }
    }

    return userDocRef;
}


export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createAuthUserWithEmailAndPassword(email, password);
}

