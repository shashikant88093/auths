'use client';

// login   page with email and password
import { useState } from 'react';
// import axios from 'axios';
import Link from 'next/link';

export default function LoginPage() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const onLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        // prevent default behavior of form submit
        e.preventDefault();
        console.log(user);
        // try {
        //     const res = await Axios.post('/api/auth/login', user);
        //     console.log(res.data);
        //     // save token to local storage
        //     localStorage.setItem('token', res.data.token);
        //     // redirect to home page
        // } catch (error) {
        //     console.log(error);
        // }
    }

    return (
        //   login page with email and password
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Login</h1>
            <hr />
            <div className="flex flex-wrap -mx-3 mb-6">
                {/* email */}
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                        Email
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-email" type="email" placeholder="demo@gmail.com"
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />
                </div>
            </div>
            {/* password */}
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Password
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-password" type="password" placeholder="******************"
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                </div>
            </div>
            <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(e) => onLogin(e)}>
                Login
            </button>
            <Link href="/signup">
                Create an account ?
            </Link>
        </div>
    )
}