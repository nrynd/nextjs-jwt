"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getUsers } from '@/services/users';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

// const users = [{
//     id: 1,
//     email: "george.bluth@reqres.in",
//     first_name: "George",
//     last_name: "Bluth",
//     avatar: "https://reqres.in/img/faces/1-image.jpg"
// }]

type User = {
    id: string,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
};

export default function UserPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers("https://reqres.in/api/users/")
            .then((res) => setUsers(res.data))
            .catch((e) => console.log(e));
    }, [])

    useEffect(() => {
        if (status === 'unauthenticated' || !session?.user.token) {
            router.push('/login');
        }
    }, [session?.user, status]);

    // const res = getUsers("https://reqres.in/api/users/");
    // const users = res.data;

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-10">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className='text-center'>
                        <th scope="col" className="px-6 py-3">#</th>
                        <th scope="col" className="px-6 py-3">Image</th>
                        <th scope="col" className="px-6 py-3">User Name</th>
                        <th scope="col" className="px-6 py-3">Email</th>
                        <th scope="col" className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.length > 0 && users.map((user: any) => {
                        return (
                            <tr key={user.id} className="bg-white-200 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="text-base font-semibold">{user.id}</div>
                                </td>
                                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <Image src={user.avatar} width={100} height={100} style={{ borderRadius: 20 }} alt='img' />
                                </th>
                                <td className="px-6 py-4">
                                    <div className="ps-3">
                                        <div className="text-base font-semibold">{user.first_name + ' ' + user.last_name}</div>

                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-normal text-gray-500">{user.email}</div>
                                </td>

                                <td className="px-6 py-4">
                                    <Link href={`/users/detail/${user.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Detail</Link>
                                </td>
                            </tr>
                        )

                    })}

                </tbody>
            </table>
        </div>

    );
}