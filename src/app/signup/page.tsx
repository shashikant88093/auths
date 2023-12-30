'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';
export default function SignupPage() {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        // password_confirmation: ''
    });
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const onSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        // prevent default behavior of form submit
        console.log("hi");
        e.preventDefault();
        console.log(user);
        try {
            setLoading(true);
            const res = await axios.post('/api/users/signup', user);
            console.log(res.data);
            // save token to local storage
            // localStorage.setItem('token', res.data.token);
            // redirect to home page
            router.push('/login');
        } catch (error: any) {
            console.log(error.response.data.message, "signup failed");
            toast.error(error.response.data.message);
        }
        finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        }
        else {
            setButtonDisabled(true);
        }
    }
        , [user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>{
                loading ? 'Loading...' : 'Signup'
            }</h1>
            <hr />
            <div className="flex flex-wrap -mx-3 mb-6">
                {/* username */}
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Username
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        id="grid-first-name" type="text" placeholder="Jane" />
                </div>

            </div>
            {/* email */}
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Email
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-email" type="email" placeholder="******************"
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />
                    <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Password
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-password" type="password" placeholder="******************"
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                    <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                </div>
            </div>
            {/* button signup */}
            <div className="flex flex -mx-3 mb-2">
                {/* signup button in center */}
                <div className="w-full px-3">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button"
                      onClick={(e: React.MouseEvent<HTMLButtonElement>) => onSignup(e)}
                        disabled={buttonDisabled}
                    >
                        Signup
                    </button>
                </div>

            </div>
            {/* redirect login page */}
            <div className="flex flex -mx-3 mb-2">
                <div className="w-full px-3">
                    <Link href="/login">
                        Already have an account? Login
                    </Link>
                </div>
            </div>
        </div>
    );
}