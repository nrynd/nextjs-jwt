"use client";

import ErrorBoundary from "next/dist/client/components/error-boundary";
import { useEffect } from "react";

type ErrorHandleType = {
    error: Error,
    reset: () => void
}

export default function Error({ error, reset }: ErrorHandleType) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="py-3 flex-col justify-center items-center text-center">
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>Try Again</button>
        </div>
    )
}