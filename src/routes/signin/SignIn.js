import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase'
import SignUp from '../../components/SignUp/SignUp';
function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);

  }

  return (
    <div><h1>SignIn Page</h1>
      <button onClick={() => logGoogleUser()}>Sign in with Google</button>
      <SignUp />
    </div>
  )
}

export default SignIn