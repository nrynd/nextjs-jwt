'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const { data: session, status } = useSession();

    return (
        <nav className='flex justify-between bg-slate-700 py-2 px-5'>
            <div className='flex'>
                <h1 className='text-white'>Navbar</h1>
                <ul className='flex ml-5'>
                    <Link href='/'>
                        <li className={`mr-3 ${pathname === '/' ? 'text-slate-300' : 'text-white'}  cursor-pointer`}>
                            Home
                        </li>
                    </Link>
                </ul>
                <ul className='flex ml-5'>
                    <Link href='/users'>
                        <li className={`mr-3 ${pathname === '/users' ? 'text-slate-300' : 'text-white'}  cursor-pointer`}>
                            Users
                        </li>
                    </Link>
                </ul>
            </div>
            <div>
                {status === 'authenticated' ? (
                    <button
                        className='bg-white rounded-md px-3 text-sm h-7 cursor-pointer'
                        onClick={() => signOut()}
                    >
                        Logout
                    </button>
                ) : (
                    <button
                        className='bg-white rounded-md px-3 text-sm h-7 cursor-pointer'
                        onClick={() => signIn()}
                    >
                        Login
                    </button>
                )}

            </div>
        </nav>
    );
}
