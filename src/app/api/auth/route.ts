import { NextResponse } from "next/server";
import { getAuthorizationUrl } from "../core/auth";

export async function GET() {
    try {
        const url = getAuthorizationUrl();

        return new NextResponse(url, {
            headers: {
                "Content-Type": "text/plain",
            },
        })
    } catch (error) {
        console.error(error);
    }
}