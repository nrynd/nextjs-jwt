import bcrypt from 'bcrypt';

export const getUsers = async (url: string) => {
    // return await new Promise((resolve, reject) => {
    //     fetch(url, { cache: 'no-cache' })
    //         .then((res) => resolve(res.json()))
    //         .catch((e) => reject(e))
    // })

    const res = await fetch(url, {
        cache: 'no-store',
        // cache: 'force-cache',
        // next: {
        //     tags: ['users']
        //     // revalidate: 3600
        // }
    });


    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export async function register(data: {
    username: string,
    email: string,
    password: string,
}) {
    const res = fetch("https://reqres.in/api/register/");

    return { status: true, statusCode: 200, message: 'Success', data: { id: '7', token: "aksdjfoqewrasdf" } }
}
