import { useParams } from 'react-router-dom'

export function ArticleDetails() {
    const { articleId } = useParams()

    return (
        <section>
            <h1>Article Details</h1>
            <p>Article ID: {articleId}</p>
        </section>
    )
}
