import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const isLogin = true;

    if (!isLogin) {
        return NextResponse.redirect(new URL("/login", request.url))
    }
}

export const config = {
    matcher: ['/users/:path*'],
};