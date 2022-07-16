import { createContext, useEffect, useState } from "react";
import {onAuthStateChangedListener,createUserDocumentFromAuth} from "../utils/firebase/firebase"
console.log("context");
//actual value we want to access
export const UserContext=createContext({
//    currentUser:null,
//     setCurrentUser:()=>null
});
console.log("context2");

export const UserProvider=({children})=>{
    useEffect(()=>{
     const unsubsribe =  onAuthStateChangedListener((user)=>{
      if(user)
      {
        createUserDocumentFromAuth(user) 
      
        }
        setCurrentUser(user) 
          console.log(user);
        })
        return unsubsribe;
            },[])
    console.log("inside context");
    const[currentUser,setCurrentUser]=useState(null);
    const value={currentUser,setCurrentUser};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}