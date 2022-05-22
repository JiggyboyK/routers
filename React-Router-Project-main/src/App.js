import './App.css';
import MovieCard from './components/MovieCard';
import {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Trailer from './components/Trailer';


function App() {
  const [newTitle, setNewTitle] = useState('')
  const [newDesc, setNewDesc] = useState('')
  const [newRating, setNewRating] = useState('')
  const [newUrl, setNewUrl] = useState('')
  const [newTrailer, setNewTrailer] = useState(null)


  const [list, setList] = useState([
    {
      id: '1',
      title: 'Love Death + Robots',
      description: "This collection of animated short stories spans several genres, including science fiction, fantasy, horror and comedy. World-class animation creators bring captivating stories to life in the form of a unique and visceral viewing experience.",
      posterURL: 'https://cdn.fstatic.com/media/movies/covers/2019/06/qadfgdf.jpg',
      rating: '5',
      trailerUrl: <iframe width="560" height="315" src="https://www.youtube.com/embed/5jPnB6A3BLI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  },
  {
      id: '2',
      title: 'Ozarks',
      description: "A financial planner who relocates his family from Chicago to a summer resort community in the Ozarks. With wife and their two kids in tow, Whole family is on the move after a money-laundering scheme goes wrong, forcing them to pay off a substantial debt to a Mexican drug lord in order to keep the family safe.",
      posterURL: "https://resizing.flixster.com/g6WGvi3ynvfItWC9RX206-jtkRM=/ems.ZW1zLXByZC1hc3NldHMvdHZzZXJpZXMvMDIyOTBmN2QtMzM0Yi00ODUxLWE0MWYtMmViYWJiOGViZjRkLmpwZw==",
      rating: '4',
      trailerUrl: <iframe width="560" height="315" src="https://www.youtube.com/embed/5hAXVqrljbs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  },
  {
    id: '3',
    title: 'Breaking Bad',
    description: "Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BODFhZjAwNjEtZDFjNi00ZTEyLThkNzUtMjZmOWM2YjQwODFmXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_FMjpg_UX1000_.jpg",
    rating: '4',
    trailerUrl: <iframe width="560" height="315" src="https://www.youtube.com/embed/lrcqbavlbyQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
},
  ])

  return (
    <div className="App">
      <BrowserRouter>
      
      <div className="head">

      <h1>Tv Shows </h1>
      
      <form className='add-movie-form' onSubmit={e=>{
          e.preventDefault()

          const final ={
            id: list.length+1,
            title: newTitle,
            description: newDesc,
            posterURL: newUrl,
            rating: newRating,
            trailerUrl: newTrailer
          }

          setList(prev=> [...prev, final])
        }}>

            <label>
                Title:-
                <input onChange={(e)=>setNewTitle(e.target.value)} type="text" placeholder='Title....' required/>
            </label>
            <br />
            <label>
                Description:-
                <input onChange={(e)=>setNewDesc(e.target.value)} type="text" placeholder='description....' required/>
            </label>
            <br />
            <label>
                Rating:-
                <input onChange={(e)=>setNewRating(e.target.value)} type="number" max={5} min={1} placeholder='1-5'/>
            </label>
            <br />
            <label>
                URL:-
                <input onChange={(e)=>setNewUrl(e.target.value)} type="text" placeholder='Poster Url...'/>
            </label>
            <label>
                Trailer URL:-
                <input onChange={(e)=>setNewTrailer(e.target.value)} type="text" placeholder='insert iframe <iframe> from YT'/>
            </label>
            <button type='submit'>Add Movie</button>
        </form>
      </div>


      <MovieCard list={list}/> 
    

    {/* Routes */}
      <Routes>
        <Route path='/movies/:id' element={<Trailer mov={list}/>}/>
      </Routes>


      </BrowserRouter>
    </div>
  )
}

export default App;
