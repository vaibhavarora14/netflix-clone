import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(fetchUrl);
                if (request.status === 200) {
                    setMovies(request.data.results);
                }
                return request;
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    <img
                        className="row__poster"
                        src={`${base_url}${movie.poster_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default Row
