import Head from 'next/head'
import { dbConnect, jsonify } from '../middlewares/db'
// import { blogPost } from '../utils/data'
import Link from 'next/link'
import Meetup from '../models/meetup'
import { useSession, signIn, signOut } from 'next-auth/client'

// export async function getServerSideProps(context) {

//   dbConnect()
//   const meetups = await Meetup.find({}).exec();

//   return {
//     props: {
//       meetups: jsonify(meetups)
//     }
//   }
// }

export default function Home() {

  const [session, loading] = useSession()
  console.log(session)


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
          {/* <ul className="text-xl font-semibold">
            {meetups.map(meetup => {
              return (
                <li key={meetup.id}>{meetup.title} | {meetup.description}</li>
              )
            })}
          </ul> */}
          {!session && (
            <>
              Cannot access this page .
              <button onClick={signIn} className="bg-red-500 text-white px-4 py-2 rounded-md hover:text-gray-200">Sign in</button>
            </>
          )}

          {session && (
            <>
              Signed in as {session.user.email}<br />
              <button onClick={signOut} className="bg-black text-white px-4 py-2 rounded-md hover:text-gray-200">Sign Out</button>
            </>
          )}
        </div>
      </main>

    </div>
  )
}
