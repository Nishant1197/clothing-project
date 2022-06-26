import React from 'react'
import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup,signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase"
import FormInput from "../../components/formInput/formInput"
import "./SignIn.scss"
import Button from "../../components/button/Button"
const defaultFormFields = {

    email: "",
    password: "",

}
function SignIn() {
    const [formFields, setforFields] = useState(defaultFormFields);
    const { email, password, } = formFields;
    const resetFormFields = () => {
        setforFields(defaultFormFields)
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response=  await signInAuthUserWithEmailAndPassword(email,password)
            console.log(response);
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
        await createUserDocumentFromAuth(user);

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
                    <Button type="button" onClick={signInWithGooglePopup} buttonType="google" >Google Sign In</Button>
                </div>
            </form>


        </div>
    )
}

export default SignIn