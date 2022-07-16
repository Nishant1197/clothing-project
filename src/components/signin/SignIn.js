import React from 'react'
import { useState} from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup,signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase"
import FormInput from "../../components/formInput/formInput"
import "./SignIn.scss"
import Button from "../../components/button/Button"
console.log("after user context import in signin");
const defaultFormFields = {

    email: "",
    password: "",

}
function SignIn() {
    const [formFields, setforFields] = useState(defaultFormFields);
    const { email, password, } = formFields;
    console.log("inside signin");

    const resetFormFields = () => {
        setforFields(defaultFormFields)
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user}=  await signInAuthUserWithEmailAndPassword(email,password)
            console.log(user);
            resetFormFields();
        }
        catch (error) {
            switch(error.code)
            {
                case "auth/wrong-password":
                alert("password is incorrect");
                break;
                case "auth/user-not-found":
                    alert("user does not exist");
                    break;
                default:
                    console.log(error);

            }
        }

    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
      

    }


    const handleChange = (event) => {
        const { name, value } = event.target
        setforFields({ ...formFields, [name]: value })
    }
    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" text="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
                <div className='buttons-container'> 
                    <Button type='submit'>Sign In</Button>
                    <Button type="button" onClick={signInWithGoogle} buttonType="google" >Google Sign In</Button>
                </div>
            </form>


        </div>
    )
}

export default SignIn