import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Submit handler");
        setEmail("");
        setPassword("");
    }
    return (
        <div className='flex h-screen w-screen
         items-center justify-center'>

            <div className='border-2 border-emerald-600 rounded-xl p-20'>
                <form
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}
                    className='flex flex-col items-center justify-center '>
                    <input
                        required
                        className="border-2 border-emerald-600 rounded-full text-lg py-3 px-5 placeholder:text-gray-400  outline-none"
                        type='email'
                        placeholder='Enter you email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        required
                        className="border-2 border-emerald-600 rounded-full text-lg py-3 px-5 placeholder:text-gray-400 outline-none mt-3"
                        type='password'
                        placeholder='Enter you password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='w-full bg-emerald-600 rounded-full py-3 px-5 mt-5
                    '>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login