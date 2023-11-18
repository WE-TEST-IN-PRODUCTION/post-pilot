import { NextResponse } from "next/server";
import { getAccessTokenFromJson, getUserFromJson, refreshToken } from "../core/auth";
import { UserInfoResponse } from "../types/auth.type";

export async function GET() {
    try {
        const accessToken = getAccessTokenFromJson();
        if (!accessToken) {
            throw new Error('No access token found')
        }

        await refreshToken(accessToken);

        const user = getUserFromJson() as UserInfoResponse;
        return NextResponse.json(user)

    } catch (error) {
        return NextResponse.json({
            error: (error as Error).message
        }, { status: 401 })
    }
}