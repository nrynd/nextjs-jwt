import Modal from "@/components/modal";
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
        <Modal>
            <div className="border-b px-10 pb-6">
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
        </Modal>
    )
}