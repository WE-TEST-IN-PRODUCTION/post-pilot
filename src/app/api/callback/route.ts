import { NextRequest, NextResponse } from "next/server";
import { getAccessToken, getUserId } from "../core/auth";
import { redirect } from "next/navigation";

export async function GET(req: NextRequest) {
    // GET THE CODE FROM REQUEST
    const code = req.nextUrl.searchParams.get("code");

    if (!code) {
        return NextResponse.json({
            error: "CODE NOT FOUND"
        }, { status: 500 })
    }

    // GET THE ACCESS TOKEN 
    let accessToken;
    try {
        accessToken = await getAccessToken(code)
    } catch (err) {
        return NextResponse.json({
            error: (err as Error).message
        }, { status: 500 })
    }

    let userId;
    try {
        userId = await getUserId(accessToken.access_token)
    } catch (err) {
        return NextResponse.json({
            error: (err as Error).message
        }, { status: 403 })
    }

    // CLEAR THE '/api/callback'
    const url = new URL(req.nextUrl.href);
    url.pathname = "/";

    redirect(url.href)
}