// DOCS: https://learn.microsoft.com/es-es/linkedin/consumer/integrations/self-serve/share-on-linkedin

export type LinkedInPost = {
    author: string;
    lifecycleState: "DRAFT" | "PUBLISHED" | "ARCHIVED";
    specificContent: ShareContent;
    visibility: "PUBLIC" | "CONNECTIONS";
}

export type ShareContent = {
    shareCommentary: string;
    shareMediaCategory: "NONE" | "IMAGE" | "ARTICLE";
    media?: ShareMedia[];
}

export type ShareMedia = {
    status: "READY" | "PROCESSING" | "FAILED";
    description: string;
    media: string;
    originalUrl: string;
    title: string;
}

// DATABASE OBJECTS
export type DBPost = {
    uuid: string;
    platform: 'LINKEDIN' | 'FACEBOOK' | 'TWITTER' | 'INSTAGRAM';
    post: LinkedInPost;
    periodicity: 'ONCE' | 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY';
    scheduleDateTime?: string | Date;
    createdAt: string;
}