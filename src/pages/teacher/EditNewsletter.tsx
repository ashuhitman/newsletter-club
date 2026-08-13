import { useParams } from 'react-router-dom'

export function EditNewsletter() {
    const { newsletterId } = useParams()

    return (
        <section>
            <h1>Edit Newsletter</h1>
            <p>Newsletter ID: {newsletterId}</p>
        </section>
    )
}
