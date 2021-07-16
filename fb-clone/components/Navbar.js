import React from 'react';
import Image from 'next/image';

const Navbar = () => {
    return (
        <div>
            <h1>Header</h1>

            {/* left side */}
            <div>
                <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png' alt="fb-logo" width={40} height={40} layout='fixed' />
            </div>

            {/* center section */}

            {/* right icons */}
        </div>
    )
}

export default Navbar
