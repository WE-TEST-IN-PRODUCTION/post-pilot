import { LinkedInPost, ShareContent } from "../types/post.type";
import { getAccessTokenFromJson, getUserId } from "./auth";
import { createJsonBodyToLinkedIn } from "./utils";

export async function sendLinkedInTextPost(text: string, scheduleDateTime: any = null): Promise<void> {
    if (scheduleDateTime && scheduleDateTime.toUpperCase() === 'NOW') {
        await sendLinkedInTextPostImmediately(text);

        console.log('Post sent immediately to LinkedIn');
        return;
    }

    const scheduledTime = scheduleDateTime ? new Date(scheduleDateTime) : null;

    if (!scheduledTime || isNaN(scheduledTime.getTime())) {
        throw new Error('Invalid date');
    }

    const currentTime = new Date();
    const timeDiff = scheduledTime.getTime() - currentTime.getTime();

    if (timeDiff < 0) {
        throw new Error('Invalid date');
    }

    schedulePost(text, timeDiff);
}

export async function sendLinkedInTextPostImmediately(text: string): Promise<void> {
    await postToLinkedIn(text);
}

export function schedulePost(text: string, timeDiff: number) {
    setTimeout(async () => {
        await postToLinkedIn(text);
    }, timeDiff);
}

export async function postToLinkedIn(text: string): Promise<void> {
    const accessToken = getAccessTokenFromJson();
    const userId = await getUserId(accessToken);

    // CREATE SHARE CONTENT
    const content: ShareContent = {
        shareCommentary: text,
        shareMediaCategory: "NONE",
    }

    // CREATE A LINKEDIN POST
    const post: LinkedInPost = {
        author: `urn:li:person:${userId}`,
        lifecycleState: "PUBLISHED",
        specificContent: content,
        visibility: "PUBLIC",
    }

    // CREATE JSON BODY
    const body = createJsonBodyToLinkedIn(post);

    console.log("Enviando a LinkedIn...") // TODO: Remove

    // POST TO LINKEDIN
    const response = await fetch(`https://api.linkedin.com/v2/ugcPosts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Restli-Protocol-Version': '2.0.0',
            'Authorization': `Bearer ${accessToken}`
        },
        body
    });

    const json = await response.json();
    console.log(json); // TODO: Remove

    if (!response.ok) {
        throw new Error('Error posting to LinkedIn');
    }

    console.log("Publicado en LinkedIn") // TODO: Remove
    return Promise.resolve();
}
