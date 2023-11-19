import { NextRequest, NextResponse } from "next/server";
import { DBPost } from "../types/post.type";
import fs from 'fs';

const postsJson = "src/data/posts.json";

export async function GET(req: NextRequest) {
    const uuid = req.nextUrl.searchParams.get('uuid');

    if (!uuid) {
        // GET ALL POSTS
        const allPostsJson = fs.readFileSync(postsJson, 'utf-8');
        const posts: DBPost[] = JSON.parse(allPostsJson)

        return NextResponse.json(posts, { status: 200 });
    } else {
        // GET POST BY UUID
        const allPostsJson = fs.readFileSync(postsJson, 'utf-8');
        const posts: DBPost[] = JSON.parse(allPostsJson)
        const post = posts.find(post => post.uuid === uuid);

        if (!post) {
            return new Response(`Post with uuid: ${uuid} not found`, { status: 404 });
        }

        return NextResponse.json(post, { status: 200 });
    }
}