import React from 'react'
import './MovieList.css'

function MovieList({list}) {
  return (
    <div className='MovList'>
      <h4>My Movies</h4>

          <div className="titles">
            {
              list.map((e, index)=> (
                <div key={e.id}>
                  <p><span>{index+1}.</span> {e.title}</p>
                </div>
              ))
            }
          </div>
      
    </div>
  )
}

export default MovieList