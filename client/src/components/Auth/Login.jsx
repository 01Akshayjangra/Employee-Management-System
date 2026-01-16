import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const { handleLogin } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
    }

    return (
        <div className='flex min-h-screen w-full items-center justify-center px-4 sm:px-6'>
            <div className='w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/90 p-8 shadow-lg backdrop-blur'>
                <div className='mb-6'>
                    <h1 className='text-xl font-semibold text-zinc-50'>
                        Employee Management
                    </h1>
                    <p className='mt-1 text-sm text-zinc-400'>
                        Sign in to manage tasks and employees.
                    </p>
                </div>

                <form
                    onSubmit={submitHandler}
                    className='space-y-4'
                >
                    <div className='space-y-1'>
                        <label className='block text-sm font-medium text-zinc-300'>
                            Email
                        </label>
                        <input
                            required
                            className="w-full rounded-full border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-sm text-zinc-50 placeholder:text-zinc-400 outline-none ring-emerald-500/0 transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/40"
                            type='email'
                            placeholder='you@example.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='space-y-1'>
                        <label className='block text-sm font-medium text-zinc-300'>
                            Password
                        </label>
                        <input
                            required
                            className="w-full rounded-full border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-sm text-zinc-50 placeholder:text-zinc-400 outline-none ring-emerald-500/0 transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/40"
                            type='password'
                            placeholder='Enter your password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className='mt-2 w-full rounded-full bg-emerald-600 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/60'
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
