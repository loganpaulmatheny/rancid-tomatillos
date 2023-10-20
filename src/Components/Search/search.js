function SearchMovies() {

  const [search, setSearch] = useState()

// set state 
// useEffect to run a filter function (which gets passed down as a prop App)
// 


  return (
    <form>
      <input
      type="text"
      name="search titles"
      value=""
      //onChange call the function in APP that filters
      
      />
    </form>
  )
}

export default SearchMovies