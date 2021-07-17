import { useRef, useState } from 'react'
import { useSession } from 'next-auth/client';
import Image from 'next/image';
import { db, storage } from '../firebase'
import firebase from 'firebase'
import { CameraIcon } from '@heroicons/react/outline'

const InputBox = () => {

    // hold image state
    const [imgState, setImgState] = useState(null)

    const [session] = useSession()
    const inputRef = useRef(null)
    const fileRef = useRef(null)

    const sendPost = (e) => {
        e.preventDefault()

        if (!inputRef.current.value) return;

        db.collection('posts').add({
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then((doc) => {
            if (imgState) {
                const uploadImg = storage.ref(`posts/${doc.id}`).putString(imgState, 'data_url')
                clearImage()

                uploadImg.on('state_change',
                    null,
                    (error) => console.log(error),
                    () => {
                        storage.ref('posts').child(doc.id)
                            .getDownloadURL()
                            .then((url) => {
                                db.collection('posts').doc(doc.id).set(
                                    {
                                        postImage: url
                                    },
                                    { merge: true }
                                )
                            })
                    }
                )
            }
        })
        inputRef.current.value = ''
    }

    // add image  // file upload
    const addImage = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setImgState(readerEvent.target.result)
        }
        console.log(reader)
    }

    //clear image handler
    const clearImage = () => {
        setImgState(null)
    }



    return (
        <div className="bg-white rounded-t-2xl p-2 shadow-md text-gray-500 mt-6">
            <div className='flex space-x-4 p-4 items-center'>
                <Image alt={session.user.name} src={session.user.image} width={40} height={40} layout="fixed" className="rounded-full" />
                <form className="flex flex-1">
                    <input type="text" name="post" id="post" ref={inputRef} placeholder={`Post something ${session.user.name}`} className="outline-none h-12 bg-gray-200 flex-grow px-5 rounded-full" />
                    <button type="submit" className="hidden" onClick={sendPost}>Submit</button>
                </form>
                {imgState && (
                    <div onClick={clearImage} className="flex flex-col filter hover:brightness-110 transition duration-150 cursor-pointer">
                        <img src={imgState} alt="uploaded_image" className="h-10 object-contain" />
                    </div>
                )}
            </div>

            <div onClick={() => fileRef.current.click()}>
                <CameraIcon className="h-7 text-green-400 cursor-pointer" />
                <input ref={fileRef} type="file"
                    name="file" id="file"
                    onChange={addImage}
                    hidden
                />
            </div>
        </div>
    )
}

export default InputBox
