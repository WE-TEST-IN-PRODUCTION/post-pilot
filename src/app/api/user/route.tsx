import { NextResponse } from "next/server";
import { getUserFromJson } from "../core/auth";
import { UserInfoResponse } from "../types/auth.type";

export async function GET() {
  try {
    const user = getUserFromJson() as UserInfoResponse;
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      {
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
