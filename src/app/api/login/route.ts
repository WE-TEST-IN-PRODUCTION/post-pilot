import { NextRequest } from "next/server";
import { getAuthorizationUrl } from "../core/auth";

export async function POST(req: NextRequest) {
    const auth_url = getAuthorizationUrl();

    
}
