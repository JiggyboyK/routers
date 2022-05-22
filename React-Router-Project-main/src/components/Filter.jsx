import React, { useState } from 'react'
import './Filter.css'

function Filter({movies, obj}) {

  const filterItems=(word)=>{
    console.log(Array.from(obj.current.children))

    Array.from(obj.current.children)
    .filter(value => !value.childNodes[1].innerText.toLocaleLowerCase().trim().includes(word))
    .forEach(val=> val.classList.add('filtered'))

    Array.from(obj.current.children)
    .filter(value => value.childNodes[1].innerText.toLocaleLowerCase().trim().includes(word))
    .forEach(val=>val.classList.remove('filtered'))

  }

  const filterRating=(num)=>{
    console.log(Array.from(obj.current.children))

    Array.from(obj.current.children)
    .filter(value => !value.children[3].innerText.toLocaleLowerCase().trim().includes(num))
    .forEach(val=> val.classList.add('filtered'))

    Array.from(obj.current.children)
    .filter(value => value.children[3].innerText.toLocaleLowerCase().trim().includes(num))
    .forEach(val=>val.classList.remove('filtered'))

  }

  return (
    <div className='movie-filter'>

      {/* name search */}
      <form >

        <label htmlFor="searchbar">Search Name: 
          <input type="text" onChange = {e=>filterItems(e.target.value)}/>
        </label>

      </form>


      {/* rating search */}
      <form >

        <label htmlFor="searchbar">Search Rating: 
          <input type="number" max={5} min={1} onChange = {e=>filterRating(e.target.value)}/>
        </label>

      </form>


    </div>
  )
} 

export default Filter