import React from 'react'
import Image from 'next/image';


const ThumbNail = ({ result }) => {

    console.log(result)

    const BASE_URL = 'https://image.tmdb.org/t/p/original/'
    return (
        <div className="group cursor-pointer">

            <Image layout='responsive' height={1000} width={1920}

                src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`} alt={result.title} />

            <div className='p-2'>
                <p className="truncate max-w-md">{result.overview}</p>
                <h2>{result.title || result.original_name}</h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    {result.media_type && `${result.media_type}`}{" "}
                    {result.release_date || result.first_air_date}
                    <span>like :{result.vote_count}</span>
                    <span className={`${result.vote_average}` <= 7 ? 'text-red-500' : 'text-gray-500'}>Rating: {result.vote_average}</span>
                </p>
            </div>
        </div>
    )
}

export default ThumbNail
