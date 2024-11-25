'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const [error, setError] = useState("");

    const handleLogin = async (e: any) => {
        e.preventDefault();

        try {
            const res = await signIn('credentials', {
                redirect: false,
                email: e.target.email.value,
                password: e.target.password.value,
                callbackUrl: '/users'
            });


            if (!res?.error) {
                router.push('/users');
            } else {
                setError(res?.error)
            }
        } catch (error: any) {
            setError(error)
        }
    }

    return (
        <div className="h-screen w-screen flex justify-center items-center flex-col">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg w-96 max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" onSubmit={(e) => handleLogin(e)}>
                    <div>
                        <Image
                            className="h-auto max-w-lg mx-auto"
                            src={"./../../logo.svg"} width={200} height={200}
                            alt="image description"
                            priority={true}
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Login</h3>
                        <h6 className="text-sm font-medium text-gray-900 dark:text-white my-0!">Please sign in to continue</h6>
                    </div>

                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>

                    <button type="submit" className="w-full text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Sign In</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Don`t have an account? <Link href="/register" className="text-blue-700 hover:underline dark:text-blue-500">Sign up</Link>
                    </div>
                </form>
            </div>
            {error !== '' && <div className='text-red-600 font-bold my-3'>{error}</div>}

        </div>
    );
}