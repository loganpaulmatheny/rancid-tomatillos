import './MovieBlowUp.css'

function MovieBlowUp({movieBlowUp, viewHome}) {
  return (
    <div >
      <h2>{movieBlowUp.title}</h2>
      <img className='movie-blowup-poster' src={movieBlowUp.poster_path} alt={`${movieBlowUp.title} poster`}/>
      <ul></ul>
        <li>{movieBlowUp.average_rating}</li>
        <li>{movieBlowUp.release_date}</li>
      <button onClick={() => viewHome()}>Return to all movies</button>
    </div>
  )
}

export default MovieBlowUp 


