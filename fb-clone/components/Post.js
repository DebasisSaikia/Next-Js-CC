import Image from 'next/image'
const Post = ({ name, message, email, timestamp, image, postImage }) => {

    return (
        <div className="flex flex-col">
            <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-md">
                <div className="flex items-center space-x-2">
                    <img src={image} alt={name} height={40} width={40} className="rounded-full" />
                    <div>
                        <p className="font-semibold">{name}</p>
                        <p className="text-xs text-gray-400">
                            {new Date(timestamp?.toDate()).toLocaleString()}
                        </p>
                    </div>
                </div>

                <p className="pt-4">{message}</p>
            </div>
            {!postImage && <h1>Loading....</h1>}
            {postImage && (
                <div className="relative h-56 md:h-96 bg-white">
                    <Image alt={`post by ${name}`} src={postImage} objectFit="contain" layout="fill" />
                </div>
            )}

        </div>
    )
}

export default Post
