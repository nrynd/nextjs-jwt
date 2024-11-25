"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const router = useRouter();
    const handleRegister = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);

        const res = await fetch('https://reqres.in/api/register', {
            method: 'POST',
            body: JSON.stringify({
                username: e.target.username.value,
                email: e.target.email.value,
                password: e.target.password.value,
            })
        })

        if (res.status === 200) {
            e.target.reset();
            setIsLoading(false);

            router.push('/login');
        } else {
            setIsLoading(false);

            setError("Register Failed");
        }
    }

    return (
        <div className="h-screen w-screen flex justify-center items-center flex-col">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg w-96 max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" onSubmit={(e) => handleRegister(e)}>
                    <div>
                        <Image className="h-auto max-w-lg mx-auto" src="./../../logo.svg" width={200} height={200} alt="image description" />
                    </div>
                    <div>
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Register</h3>
                        <h6 className="text-sm font-medium text-gray-900 dark:text-white my-0!">Please Register to login</h6>
                    </div>

                    <div>
                        <label htmlFor="username" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Username</label>
                        <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="username" required />
                    </div>

                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>

                    <button type="submit" className="w-full text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Sign up</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Already have an account? <Link href="/login" className="text-blue-700 hover:underline dark:text-blue-500">Sign in</Link>
                    </div>
                </form>
            </div>
            {error !== '' && <div className='text-red-600 font-bold my-3'>{error}</div>}

        </div>
    );
}
