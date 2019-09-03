const BASE_API = "https://yts.lt/api/v2/"

class api {
    async getMovies() {
        const query = await fetch(`${BASE_API}list_movies.json&limit=50`)
        const { data } = await query.json()
        return data.movies
    }
    async getSuggestions(id) {
        const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`)
        const { data } = await query.json()
        return data.movies
    }
    async getMovie(id) {
        const query = await fetch(`${BASE_API}movie_details.json?movie_id=${id}`)
        const { data } = await query.json()
        return data.movies
    }
}
export default new api()