import assert from "assert";
import fs from "fs";
import { AccessTokenResponse, UserInfoResponse } from "../types/auth.type";
import { json } from "stream/consumers";

const clientId = process.env.LINKEDIN_CLIENT_ID;
const clientSecret = process.env.LINKEDIN_CLIENT_SECRET;
const authorizationURL = process.env.LINKEDIN_AUTHORIZATION_URL;
let redirectURI = process.env.LINKEDIN_REDIRECT_URI;
const accessTokenURL = process.env.LINKEDIN_ACCESS_TOKEN_URL;
const userInfoURL = process.env.LINKEDIN_USER_INFO_URL;

assert.ok(clientId, "clientId is required");
assert.ok(clientSecret, "clientSecret is required");
assert.ok(authorizationURL, "authorizationURL is required");
assert.ok(redirectURI, "redirectURI is required");
assert.ok(accessTokenURL, "accessTokenURL is required");
assert.ok(userInfoURL, "userInfoURL is required");

redirectURI = redirectURI.replace("{__PORT__}", process.env.PORT || "3000");

export function getAuthorizationUrl(): string {
    if (!redirectURI) {
        throw new Error("redirectURI is required");
    }

    const state = Buffer.from(
        Math.round(Math.random() * Date.now()).toString()
    ).toString("hex");
    const scope = encodeURIComponent("w_member_social");

    return `${authorizationURL}?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(
        redirectURI
    )}&state=${state}&scope=${scope}`;
}

export async function getAccessToken(code: string): Promise<AccessTokenResponse> {
    if (!accessTokenURL) {
        throw new Error("accessTokenURL is required");
    }

    const body = {
        grant_type: "authorization_code",
        code,
        redirect_uri: redirectURI,
        client_id: clientId,
        client_secret: clientSecret,
    };

    const response = await fetch(accessTokenURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        cache: "no-store",
        body: new URLSearchParams(body as any),
    });


    if (!response.ok) {
        throw new Error(await response.text());
    }

    const data = await response.json() as AccessTokenResponse;

    // WRITE TO FILE
    if (!process.env.ACCESS_TOKEN_FILEPATH) {
        throw new Error("ACCESS_TOKEN_FILEPATH is required to save access token");
    }

    fs.writeFileSync(process.env.ACCESS_TOKEN_FILEPATH, JSON.stringify(data, null, 2))

    return data;
}

export async function getUserId(accessToken: string): Promise<string> {
    if (!userInfoURL) {
        throw new Error("userInfoURL is required");
    }

    const response = await fetch(userInfoURL, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'X-Restli-Protocol-Version': '2.0.0'
        },
        cache: "no-store"
    });

    if (!response.ok) {
        throw new Error(await response.text());
    }

    const data = await response.json() as UserInfoResponse;

    // WRITE TO FILE
    if (!process.env.USER_INFO_FILEPATH) {
        throw new Error("USER_INFO_FILEPATH is required to save user info");
    }

    fs.writeFile(process.env.USER_INFO_FILEPATH, JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.error(`Error writing user info to file: ${err}`);
        }
    });

    return data.sub;
}