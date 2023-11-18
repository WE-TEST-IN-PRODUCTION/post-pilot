export type AccessTokenResponse = {
    access_token: string;
    expires_in: number;
    scope: string;
}

export type UserInfoResponse = {
    sub: string;
    name: string;
    given_name: string;
    family_name: string;
    picture: string;
    locale: string;
    email: string;
    email_verified: boolean;
}