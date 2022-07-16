import {initializeApp} from "firebase/app"
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,
    onAuthStateChanged
} from "firebase/auth"

import {
   getFirestore,
   doc,
   getDoc,
   setDoc 
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDzCXs3B1CvUWwIVqYAvEnqDPEiThxmDw0",
    authDomain: "clothing-project-157c1.firebaseapp.com",
    projectId: "clothing-project-157c1",
    storageBucket: "clothing-project-157c1.appspot.com",
    messagingSenderId: "326556235320",
    appId: "1:326556235320:web:c5b9234e53943c20e118cd"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
const provider= new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
});

export const auth=getAuth();

export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);

export const db=getFirestore();

export const createUserDocumentFromAuth=async(userAuth,additionalInformation)=>{
    const userDocRef=doc(db,'users',userAuth.uid)
    const userSnapshot=await getDoc(userDocRef)
    console.log(additionalInformation);
    if(!userSnapshot.exists()){
        const {displayName,email}=userAuth;
        const createdAt=new Date();
        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });

        }
        catch(error){
          
            console.log('error creating the user' +error.message);
        }
    }

    return userDocRef;

}

export const createAuthUserWithEmailAndPassword=async (email,password)=>{
 return createUserWithEmailAndPassword(auth,email,password)
}

export const signInAuthUserWithEmailAndPassword=async (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
   }

export const signOutUser= async()=>await signOut(auth);

export const onAuthStateChangedListener=(callback)=>{
    onAuthStateChanged(auth,callback);
}