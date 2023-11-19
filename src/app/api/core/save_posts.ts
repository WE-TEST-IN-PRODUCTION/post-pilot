import { randomUUID } from "crypto";
import { getUserIdFromJson } from "./auth";
import { DBPost, LinkedInPost, ShareContent } from "../types/post.type";
import fs from 'fs';

const postsJson = "src/data/posts.json"

export function saveLinkedInPost(
    message: string,
    scheduleDateTime: string | Date,
    periodicity: 'ONCE' | 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY' = 'ONCE',
): Promise<string> {
    // CREATE RANDOM UUID
    const uuid = randomUUID();
    const platform = 'LINKEDIN';

    let lifecycleState: "PUBLISHED" | "DRAFT" | "ARCHIVED" = "ARCHIVED"
    if (typeof scheduleDateTime === 'string' && scheduleDateTime.toUpperCase() === 'NOW') {
        lifecycleState = 'PUBLISHED';
    } else {
        lifecycleState = 'DRAFT';
    }

    if (scheduleDateTime instanceof Date) {
        const scheduledTime = new Date(scheduleDateTime);
        const currentTime = new Date();
        const timeDiff = scheduledTime.getTime() - currentTime.getTime();

        if (timeDiff > 0) {
            lifecycleState = 'DRAFT';
        } else {
            lifecycleState = 'PUBLISHED';

        }
    }

    // CREATE CONTENT 
    const content: ShareContent = {
        "shareCommentary": message,
        "shareMediaCategory": "NONE",
    }

    // CREATE A LINKEDIN POST
    const post: LinkedInPost = {
        "author": getUserIdFromJson(),
        "lifecycleState": lifecycleState,
        specificContent: content,
        "visibility": "PUBLIC",
    }

    // CREATE DB POST 
    const dbPost: DBPost = {
        uuid,
        platform,
        post,
        periodicity,
        scheduleDateTime,
        createdAt: new Date().toISOString(),
    }

    // SAVE TO DATABASE
    const posts = JSON.parse(fs.readFileSync(postsJson).toString());
    posts.push(dbPost);

    fs.writeFileSync(postsJson, JSON.stringify(posts, null, 2));

    // RETURN UUID
    return Promise.resolve(uuid);
}