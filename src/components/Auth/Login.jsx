import React, { useState } from 'react'

function Login({handleLogin}) {
    // console.log(handleLogin);

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')


    const submitHandler = (e) =>{
        e.preventDefault();
        // console.log("Email is ", Email);
        // console.log("Password is ", Password);
        
         handleLogin(Email, Password);
        setEmail("");
        setPassword("");

    }

    return (
        <div className='flex h-screen w-screen items-center justify-center '>
            
            <div className='border-2 border-red-600 p-20 bg-black'>

                <form 
                onSubmit={(e)=>{
                    submitHandler(e)
                }}
                className='flex flex-col item-center  justify-center'>
                        <input 
                        value={Email}
                        onChange={(e)=>{
                            // console.log(e.target.value);
                            setEmail(e.target.value)
                        }}
                        required className='border-2 text-black text-center bg-tranparent border-emrald-600 rounded-full text-xl mt-3 ' type="email" placeholder='Enter Your Email'/>
                        <input 
                        value={Password} 
                        onChange={(e)=>{
                            // console.log(e.target.value);
                            setPassword(e.target.value)
                        }}
                        required className='border-2 border-emrald-600 text-center text-xl rounded-full mt-5' type="password" placeholder='Enter The Password'/>
                        <button className='border-none  outline-none bg-gray-300 mt-5 rounded-full py-3 px-5 '>Login</button>
                </form>

            </div>
        </div>
    )
}

export default Login
