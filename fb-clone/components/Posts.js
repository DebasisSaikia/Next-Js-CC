import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from "../firebase";
import Post from './Post';

const Posts = () => {
    const [realtimePosts, loading] = useCollection(
        db.collection('posts').orderBy('timestamp', 'desc')
    )
    return (
        <div>
            {realtimePosts?.docs.map(post => {
                return <Post key={post.id} name={post.data().name}
                    message={post.data().message} email={post.data().email}
                    timestamp={post.data().timestamp} image={post.data().image}
                    postImage={post.data().postImage}
                />
            })}

            {loading && <h1>Loading...</h1>}
        </div>
    )
}

export default Posts
