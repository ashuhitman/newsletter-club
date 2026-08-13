import { useParams } from 'react-router-dom'

export function IssueDetails() {
    const { issueId } = useParams()

    return (
        <section>
            <h1>Issue Details</h1>
            <p>Issue ID: {issueId}</p>
        </section>
    )
}
