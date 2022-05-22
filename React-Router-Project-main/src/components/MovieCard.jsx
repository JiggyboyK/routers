import React, {useRef} from 'react'
import './MovieCard.css'
import Filter from './Filter'
import MovieList from './MovieList'
import {Link} from 'react-router-dom'

function MovieCard({list}) {
  const movie = useRef('movie')

  return (
    <div>
      <Filter obj={movie} />

      <div ref={movie} className='MovieCard'>
        {
        list.map((movie)=>(
            <div key={movie.id} className='mapped'>
              
              <div className="movie-image">
                <img src={movie.posterURL} alt='movie-poster' />
              </div>
              <h5 className='movie-title'>{movie.title}</h5>
              <h5 className='contentList' > <span>Description : </span>{movie.description}</h5>
              <h5 className='contentList'> Movie ratings: {movie.rating}</h5>
                  <Link to={`/movies/${movie.id}`}><p>Wacth trailer...</p></Link>
              {/* <p>Author : Samuel&#128540;</p> */}
            </div>
        ))
      }
      </div>
      
      <MovieList list={list}/>

    </div>
  )
}

export default MovieCard