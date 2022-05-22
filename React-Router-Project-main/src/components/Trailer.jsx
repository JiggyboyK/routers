import React from 'react'
import './Trailer.css'
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

function Trailer({mov}) {
    const {id} = useParams()    
    const history = useNavigate();

    function handleClick() {
        history("/home");
    }

  return (
    <div className='trailer-page'>
        {mov.filter(each => each.id === id)
            .map((movie)=>(
                <div key={movie.id} className="movie-trailer">
                    <span>{movie.trailerUrl}</span>
                    <p>{movie.description}</p>
                    <button type="button" onClick={handleClick}> Go home </button>
                </div>
            ))
        }
    </div>
  )
}
export default Trailer