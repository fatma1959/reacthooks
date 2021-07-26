import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = ({movieList,handleDelete}) => {
    return (
        
            <div className="d-flex justify-content-around flex-wrap">
           {movieList.map((movie)=><MovieCard movie={movie} key={movie.id}handleDelete={handleDelete}/>)} 
        </div>
       
    )
}

export default MovieList
