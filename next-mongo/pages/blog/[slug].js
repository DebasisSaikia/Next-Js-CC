import { blogPost } from '../../utils/data'
import Head from 'next/head'
import Link from 'next/link'

export async function getStaticProps(context) {
    const { params } = context
    return {
        props: blogPost.find((blog) => blog.slug === params.slug)
    }
}

export async function getStaticPaths() {
    const allDatas = getAllDatas()
    console.log(allDatas)
    return {
        paths: blogPost.map((blog) => ({
            params: {
                slug: blog.slug
            }
        })),
        fallback: false
    }
}


const DetailPage = ({ title, date, content }) => {
    return (
        <div className="w-1/2 mx-auto mt-12" >
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main >
                <Link href='/'>
                    <button className="outline-none hover:bg-red-700 mb-2 bg-gray-600 text-white px-3 rounded-sm">Back</button>
                </Link>
                <h1 className="text-3xl text-black font-semibold mb-4">{title}</h1> <span className="mb-5 text-gray-400 text-sm">{date}</span>
                <p className="text-xl font-normal ">{content}</p>
            </main>

        </div>
    )
}

export default DetailPage
