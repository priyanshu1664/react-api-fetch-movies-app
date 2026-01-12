import React, { useState } from "react";
import classes from "./EditMovie.module.css";

function EditMovie(props) {
  const [title, setTitle] = useState(props.movie.title);
  const [openingText, setOpeningText] = useState(props.movie.openingText);
  const [releaseDate, setReleaseDate] = useState(props.movie.releaseDate);

  function submitHandler(event) {
    event.preventDefault();

    const updatedMovie = {
      id: props.movie.id,
      title,
      openingText,
      releaseDate,
    };

    props.onUpdateMovie(updatedMovie);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className={classes.control}>
        <label>Opening Text</label>
        <textarea
          rows="5"
          value={openingText}
          onChange={(e) => setOpeningText(e.target.value)}
        />
      </div>

      <div className={classes.control}>
        <label>Release Date</label>
        <input
          type="text"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
      </div>

      <button>Update Movie</button>
    </form>
  );
}

export default EditMovie;
