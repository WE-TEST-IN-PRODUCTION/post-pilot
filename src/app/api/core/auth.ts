// INSPIRED IN https://www.azaytek.com/part-1-how-to-get-linkedin-api-access-token/

import assert from "assert";
import fs from "fs";
import { AccessTokenResponse, UserInfoResponse } from "../types/auth.type";

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
    const scope = encodeURIComponent("openid profile w_member_social");

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

export function getAccessTokenFromJson(): string {
    if (!process.env.ACCESS_TOKEN_FILEPATH) {
        throw new Error("ACCESS_TOKEN_FILEPATH is required to save access token");
    }

    const accessTokenJson = fs.readFileSync(process.env.ACCESS_TOKEN_FILEPATH, 'utf-8');
    const accessToken = JSON.parse(accessTokenJson) as AccessTokenResponse;

    // CHECK IF ACCESS TOKEN IS VALID
    if (!accessToken.access_token) {
        throw new Error("Access token is not valid");
    }

    return accessToken.access_token;
}

export function getUserIdFromJson(): string {
    if (!process.env.USER_INFO_FILEPATH) {
        throw new Error("USER_INFO_FILEPATH is required to save user info");
    }

    const userInfoJson = fs.readFileSync(process.env.USER_INFO_FILEPATH, 'utf-8');
    const userInfo = JSON.parse(userInfoJson) as UserInfoResponse;

    return userInfo.sub;
}

export function getUserFromJson(): UserInfoResponse {
    if (!process.env.USER_INFO_FILEPATH) {
        throw new Error("USER_INFO_FILEPATH is required to save user info");
    }

    const userInfoJson = fs.readFileSync(process.env.USER_INFO_FILEPATH, 'utf-8');
    const userInfo = JSON.parse(userInfoJson) as UserInfoResponse;

    // CHECK IF USER IS VALID
    if (!userInfo.sub) {
        throw new Error("User info is not valid");
    }

    return userInfo;
}

export async function refreshToken(accessToken: string): Promise<void> {
    if (!accessTokenURL) {
        throw new Error("accessTokenURL is required");
    }

    const body = {
        grant_type: "refresh_token",
        refresh_token: accessToken,
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

    const data = await response.json()

    // BUILD accessTokenResponse
    const accessTokenResponse: AccessTokenResponse = {
        access_token: data.refresh_token,
        expires_in: data.refresh_token_expires_in,
        scope: data.scope,
    }

    // WRITE TO FILE
    if (!process.env.ACCESS_TOKEN_FILEPATH) {
        throw new Error("ACCESS_TOKEN_FILEPATH is required to save access token");
    }

    fs.writeFileSync(process.env.ACCESS_TOKEN_FILEPATH, JSON.stringify(accessTokenResponse, null, 2))
}