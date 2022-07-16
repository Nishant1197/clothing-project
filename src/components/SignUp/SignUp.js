import React from 'react'
import { useState } from 'react'
import {createAuthUserWithEmailAndPassword,createUserDocumentFromAuth} from "../../utils/firebase/firebase"
import FormInput from "../../components/formInput/formInput"
import "./SignUp.scss"
import Button from "../../components/button/Button"
const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}
console.log("after user context import in signup");
function SignUp() {
    const [formFields, setforFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
   console.log("inside signup");
    const resetFormFields=()=>{
        setforFields(defaultFormFields)
    }
    const handleSubmit= async (event)=>{
        event.preventDefault();
        if(password!==confirmPassword)
        alert("no")
        try{
        const {user}=await createAuthUserWithEmailAndPassword(email,password);
        console.log(user);
        
        await createUserDocumentFromAuth(user,{displayName})
        resetFormFields();
    }
        catch(error)
        {
            if(error.code==='auth/email-already-in-use')
            {
                alert("Cannot create user,email already in use")
            }
            console.log("user creation encountered an error",error);
        }
       
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setforFields({...formFields, [name]: value})
    }
    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName} />
                <FormInput label="Email" text="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
                <Button type='submit'>Signup</Button>
            </form>


        </div>
    )
}

export default SignUp