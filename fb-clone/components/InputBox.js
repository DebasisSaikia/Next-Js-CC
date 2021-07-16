import { useSession } from 'next-auth/client';
import Image from 'next/image';

const InputBox = () => {

    const [session] = useSession()

    const sendPost = (e) => {
        e.preventDefault()
    }
    return (
        <div className="bg-white rounded-t-2xl p-2 shadow-md text-gray-500 mt-6">
            <div className='flex space-x-4 p-4 items-center'>
                <Image alt={session.user.name} src={session.user.image} width={40} height={40} layout="fixed" className="rounded-full" />
                <form className="flex flex-1">
                    <input type="text" name="post" id="post" placeholder={`Post something ${session.user.name}`} className="outline-none h-12 bg-gray-200 flex-grow px-5 rounded-full" />
                    <button type="submit" className="hidden" onClick={sendPost}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default InputBox
