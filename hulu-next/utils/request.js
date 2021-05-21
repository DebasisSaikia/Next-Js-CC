const API_KEYS = process.env.API_KEYS

export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEYS}&language=en-US`
    }
}