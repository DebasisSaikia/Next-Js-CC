const API_KEYS = '9fde1f29c2e9cd2219c067443376720d'

export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEYS}&language=en-US`
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=${API_KEYS}&language=en-US`
    },
    fetchActionMovies: {
        title: 'Actions',
        url: `/discover/movie?api_key=${API_KEYS}&with_genres=28`
    },
    fetchComedyMovies: {
        title: 'Comedy',
        url: `/discover/movie?api_key=${API_KEYS}&with_genres=35`
    },
    fetchHorrorMovies: {
        title: 'Horror',
        url: `/discover/movie?api_key=${API_KEYS}&with_genres=27`
    },
    fetchRomanceMovies: {
        title: 'Romance',
        url: `/discover/movie?api_key=${API_KEYS}&with_genres=10749`
    },
    fetchMystery: {
        title: 'Mystery',
        url: `/discover/movie?api_key=${API_KEYS}&with_genres=9648`
    },
    fetchSciFi: {
        title: 'Sci-fi',
        url: `/discover/movie?api_key=${API_KEYS}&with_genres=878`
    },
    fetchWestern: {
        title: 'Western',
        url: `/discover/movie?api_key=${API_KEYS}&with_genres=37`
    },
    fetchAnimation: {
        title: 'Animations',
        url: `/discover/movie?api_key=${API_KEYS}&with_genres=16`
    },
    fetchTV: {
        title: 'TV-Series',
        url: `/discover/movie?api_key=${API_KEYS}&with_genres=10770`
    }
}



