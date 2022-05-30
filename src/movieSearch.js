import React, {useState} from "react";
import MovieCard from "./movieCard";
import ListSize from "./listSize";


export default function MovieSearch() {
    
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    
    const movieSearch = async (e) => {
        e.preventDefault(); // prevents page from submitting on initial render
        if(query === "") {
            return; // prevents the page from submitting an empty query
        }
        const API_KEY = "0021c3d2f535a4b804e5df685a2b61a3";
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=true`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <>
            <form className="form" onSubmit={movieSearch}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query" placeholder="i.e. Everything Everywhere All at Once" value={query} onChange={(e) => setQuery(e.target.value)}/>
                <button className="button" type="submit">Search</button>
                <br/>
            </form>

            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie ={movie}/>
                ))}
            </div>
            
            <div>
                <ListSize movies ={movies} query ={query}/>
            </div>
        </>
    )
}