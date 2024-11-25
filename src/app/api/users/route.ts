import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id: 1,
        email: "george.bluth@reqres.in",
        first_name: "George",
        last_name: "Bluth",
        avatar: "https://reqres.in/img/faces/1-image.jpg"
    },
    {
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg"
    },
    {
        id: 3,
        email: "emma.wong@reqres.in",
        first_name: "Emma",
        last_name: "Wong",
        avatar: "https://reqres.in/img/faces/3-image.jpg"
    }
];

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");


    if (id) {
        const detail = data.find((item) => item.id === Number(id));

        if (detail) {
            return NextResponse.json({
                status: 200,
                message: 'Success',
                data: detail
            });
        }
        return NextResponse.json({
            status: 404,
            message: 'Not Found',
            data: {}
        });
    }

    return NextResponse.json({
        status: 200,
        message: 'Success',
        data
    });

}