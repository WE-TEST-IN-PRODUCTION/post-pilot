import { LinkedInPost } from '../types/post.type';

export function createJsonBodyToLinkedIn(post: LinkedInPost): string {
    const body = {
        "author": post.author,
        "lifecycleState": post.lifecycleState,
        "specificContent": {
            "com.linkedin.ugc.ShareContent": {
                "shareCommentary": {
                    "text": post.specificContent.shareCommentary
                },
                "shareMediaCategory": post.specificContent.shareMediaCategory,
                ...(post.specificContent.media && { "media": post.specificContent.media })
            }
        },
        "visibility": {
            "com.linkedin.ugc.MemberNetworkVisibility": post.visibility
        }
    }

    return JSON.stringify(body);
}