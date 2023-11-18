import { NextRequest, NextResponse } from "next/server";
import { sendLinkedInTextPost } from "../../core/posts";

export async function POST(req: NextRequest) {
    const { message, scheduleDateTime } = await req.json();

    if (!message || !scheduleDateTime) {
        return NextResponse.json({ error: 'INVALID DATA' }, { status: 400 });
    }

    try {
        await sendLinkedInTextPost(message, scheduleDateTime);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'INTERNAL SERVER ERROR' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
}