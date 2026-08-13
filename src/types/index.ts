export type Role = 'teacher' | 'admin' | 'student' | 'staff'

export type NewsletterStatus = 'draft' | 'published' | 'archived'

export type NewsletterRecord = {
    id: string
    title: string
    issue: string
    summary: string
    content: string
    status: NewsletterStatus
    createdAt: string
    updatedAt: string
}
