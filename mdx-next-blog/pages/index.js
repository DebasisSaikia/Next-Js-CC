import Head from 'next/head'
// import { blogPost } from '../utils/data'
import Link from 'next/link'

export default function Home() {

  return (
    <div >
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto w-1/2 mt-12" >
        <div >
          {/* {blogPost.map((blog) => {
            return (
              <div key={blog.slug} className="border border-gray-300 rounded-md mb-5 shadow-md p-3 hover:opacity-80">
                <div className="text-3xl mb-2 mt-4">
                  <Link href={`/blog/${blog.slug}`} >{blog.title}</Link>
                </div>
                <div className="text-sm text-gray-400">{blog.date.toString()}</div>
                <div className="text-xl">{blog.content}</div>
              </div>
            )
          })} */}
        </div>
      </main>



    </div>
  )
}
