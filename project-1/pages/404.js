import Link from "next/link"

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Something went Wrong</h1>
            <h2>Page Cannot be found !</h2>
            <p>Go to Home Page <Link href='/'><a>HomePage</a></Link> </p>
        </div>
    )
}

export default NotFound
