import { getUsers } from "@/services/users";
import Image from "next/image";

export default async function UserDetailPage({ params }: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id
    const url = `https://reqres.in/api/users/?id=${id}`;
    const users = await getUsers(url);
    const data = users.data;

    return (
        <div className="h-screen dark:bg-gray-700 bg-gray-200 pt-12">
            <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                <div className="border-b px-4 pb-6">
                    <div className="text-center my-4">
                        <div className='flex justify-center py-4'>
                            <Image src={data.avatar} width={200} height={200} style={{ borderRadius: 100 }} alt='img' />
                        </div>
                        <div className="py-2">
                            <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">{data.first_name + ' ' + data.last_name}</h3>
                            <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
                                {data.email}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}