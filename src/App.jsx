import React, { useState, useEffect, useCallback } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";
import LoadingSpinner from "./components/LoadingSpinner";
import Header from "./UI/Header";
import EditMovie from "./components/editMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editingMovie, setEditingMovie] = useState(false);
  const [movieValue, setMovieValue] = useState(null);

  function editMovieHandler(movie) {
    setEditingMovie(true);
    setMovieValue(movie);
  }

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null); // Reset error state before making a new request

    try {
      const res = await fetch(
        "https://fetch-http-22524-default-rtdb.firebaseio.com/movies.json"
      );
      if (!res.ok) {
        throw new Error("Something went wrong while fetching movies!");
      }
      const data = await res.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []); // Empty dependency array, so it doesn't recreate the function on every render

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]); // fetchMoviesHandler is stable and won't change

  async function addMovieHandler(movie) {
    try {
      const response = await fetch(
        "https://fetch-http-22524-default-rtdb.firebaseio.com/movies.json",
        {
          method: "POST",
          body: JSON.stringify(movie),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to add movie!");
      }
      const data = await response.json();

      console.log(data);

      // Optionally fetch the movies again to include the new movie in the list
      fetchMoviesHandler();
    } catch (error) {
      setError(error.message);
    }
  }

  async function deleteMovieHandler(movieId) {
    try {
      const response = await fetch(
        `https://fetch-http-22524-default-rtdb.firebaseio.com/movies/${movieId}.json`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete movie!");
      }

      // Refresh movies list after delete
      fetchMoviesHandler();
    } catch (error) {
      setError(error.message);
    }
  }

  async function updateMovieHandler(updatedMovie) {
    try {
      const response = await fetch(
        `https://fetch-http-22524-default-rtdb.firebaseio.com/movies/${updatedMovie.id}.json`,
        {
          method: "PATCH",
          body: JSON.stringify({
            title: updatedMovie.title,
            openingText: updatedMovie.openingText,
            releaseDate: updatedMovie.releaseDate,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update movie!");
      }

      setMovies((prevMovies) =>
        prevMovies.map((movie) =>
          movie.id === updatedMovie.id ? updatedMovie : movie
        )
      );

      setEditingMovie(null);
    } catch (error) {
      setError(error.message);
    }
  }

  let content = <p>No Movies Found.</p>;

  if (movies.length > 0) {
    content = (
      <MoviesList
        movies={movies}
        onDeleteMovie={(movieId) => deleteMovieHandler(movieId)}
        onEditMovie={editMovieHandler}
      />
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <LoadingSpinner />;
  }

  /*   const sampleMovies = [
    {
      title: "The Dark Knight",
      openingText:
        "Batman faces his greatest psychological and physical challenge when the Joker wreaks havoc on Gotham City.",
      releaseDate: "2008-07-18",
    },
    {
      title: "Inception",
      openingText:
        "A skilled thief enters people's dreams to steal secrets, but is given a chance at redemption through one last job.",
      releaseDate: "2010-07-16",
    },
    {
      title: "Interstellar",
      openingText:
        "A team of explorers travel through a wormhole in space to ensure humanity’s survival.",
      releaseDate: "2014-11-07",
    },
    {
      title: "Avengers: Endgame",
      openingText:
        "The Avengers assemble one final time to undo the devastation caused by Thanos.",
      releaseDate: "2019-04-26",
    },
    {
      title: "Titanic",
      openingText:
        "A timeless love story unfolds aboard the ill-fated RMS Titanic.",
      releaseDate: "1997-12-19",
    },
  ]; */

  return (
    <React.Fragment>
      <Header></Header>
      <section>
        {editingMovie === true ? (
          <EditMovie movie={movieValue} onUpdateMovie={updateMovieHandler} />
        ) : (
          <AddMovie onAddMovie={addMovieHandler} />
        )}
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
