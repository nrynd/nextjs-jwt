import React from 'react';

export default function Loading() {
    const row = [];
    for (let index = 0; index < 2; index++) {
        row.push(index);
    }

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
                    {row.map((r, i) => {
                        return (
                            <tr key={i} className="bg-white-200 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="text-base font-semibold"></div>
                                </td>
                                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <div className='w-20 h-20 rounded-md bg-slate-300'>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    <div className="ps-3">
                                        <div className="text-base font-semibold bg-slate-300 h-4 rounded-md"></div>

                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-normal text-gray-500 bg-slate-300 h-4 rounded-md"></div>
                                </td>

                                <td className="px-6 py-4">
                                    <div className="font-normal text-gray-500 bg-slate-300 h-4 rounded-md"></div>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    );
}
