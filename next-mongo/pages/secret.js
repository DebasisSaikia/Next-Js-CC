import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/client'


export default function Secret() {
    const [session, loading] = useSession();
    const [content, setContent] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/secret')
            const json = await res.json()

            if (json.content) {
                setContent(json.content);
            }
        }
        fetchData()
    }, [session])

    if (typeof window !== 'undefined' && loading) return null;

    if (!session) {
        return (
            <main>
                <div>
                    <h1>You're not authorized ! Please sign in to continue</h1>
                </div>
            </main>
        )
    }

    return (
        <div>
            <h1>Protected page</h1>
            <p>
                {content}
            </p>
        </div>
    )
}
