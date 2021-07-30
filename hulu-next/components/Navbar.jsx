import request from "../utils/request"

const Navbar = () => {
    return (
        <nav>
            <div className='flex justify-between px-10 sm:px-20 text-2xl whitespace-nowrap space-x-8 sm:space-x-20 overflow-x-scroll'>
                {Object.entries(request).map(([key, { title, url }]) => (
                    <h2 key={key} className=' last:pr-15 cursor-pointer transition duration-100
                     transform hover:scale-105 hover:text-white active:text-yellow-600' >
                        {title}</h2>
                ))}
            </div>
        </nav>
    )
}

export default Navbar
