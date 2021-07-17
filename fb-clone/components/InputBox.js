import { useRef } from 'react'
import { useSession } from 'next-auth/client';
import Image from 'next/image';
import { db } from '../firebase'
import firebase from 'firebase'
import { CameraIcon } from '@heroicons/react/outline'

const InputBox = () => {

    const [session] = useSession()
    const inputRef = useRef(null)

    const sendPost = (e) => {
        e.preventDefault()

        if (!inputRef.current.value) return;

        db.collection('posts').add({
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        inputRef.current.value = ''
    }

    return (
        <div className="bg-white rounded-t-2xl p-2 shadow-md text-gray-500 mt-6">
            <div className='flex space-x-4 p-4 items-center'>
                <Image alt={session.user.name} src={session.user.image} width={40} height={40} layout="fixed" className="rounded-full" />
                <form className="flex flex-1">
                    <input type="text" name="post" id="post" ref={inputRef} placeholder={`Post something ${session.user.name}`} className="outline-none h-12 bg-gray-200 flex-grow px-5 rounded-full" />
                    <button type="submit" className="hidden" onClick={sendPost}>Submit</button>
                </form>
            </div>

            <div>
                <CameraIcon className="h-7 text-green-400 cursor-pointer" />
            </div>
        </div>
    )
}

export default InputBox
