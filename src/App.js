import "./App.css";
import MovieList from "./Components/MovieList/MovieList";
import AddMovie from "./Components/AddMovie/AddMovie";
import Filter from "./Components/Filter/Filter";
import { moviedata } from "./data";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [movieList, setMovieList] = useState(moviedata);
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(0);
  const handleDelete = (idMovie) => {
    setMovieList(movieList.filter((el) => el.id !== idMovie));
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const ratingChanged = (newRating) => {
    setRate(newRating);
  };
  const handleAdd = (newMovie) =>{
    setMovieList([...movieList,newMovie])
  }
  return (
    <div className="App">
      <Filter
        handleChange={handleChange}
        title={title}
        ratingChanged={ratingChanged}
        rate={rate}
      />
      <MovieList
        movieList={movieList.filter((movie) =>
          (movie.title.toUpperCase().includes(title.toUpperCase()))
        && (movie.rate >= rate) )}
        handleDelete={handleDelete}
      />
      <AddMovie handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
