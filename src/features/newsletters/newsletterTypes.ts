export type NewsletterStatus = "draft" | "published";

export interface Newsletter {
    $id: string;
    $createdAt: string;
    $updatedAt: string;

    title: string;
    slug: string;
    issue: string;

    description?: string;

    coverFileId?: string;

    status: NewsletterStatus;

    publishedAt?: string | null;

    createdBy: string;
}