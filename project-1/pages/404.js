import Link from "next/link";
import {useEffect} from 'react'
import {useRouter} from 'next/router'

const NotFound = () => {
    const router=useRouter()
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        },3000)
    },[])

    return (
        <div className="not-found">
            <h1>Something went Wrong</h1>
            <h2>Page Cannot be found !</h2>
            <p>Go to Home Page <Link href='/'><a>HomePage</a></Link> </p>
        </div>
    )
}

export default NotFound
