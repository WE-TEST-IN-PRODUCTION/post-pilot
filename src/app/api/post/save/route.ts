import { NextRequest, NextResponse } from "next/server";
import { saveLinkedInPost } from "../../core/save_posts";

export async function POST(req: NextRequest) {
    const { message, scheduleTime, periodicity } = await req.json();

    try {
        const uuid = await saveLinkedInPost(message, scheduleTime, periodicity);
        return NextResponse.json({
            uuid: uuid
        }, { status: 200 });
    } catch (error) {
        return new Response((error as Error).message, { status: 400 });
    }
}