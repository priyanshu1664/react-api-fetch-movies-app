import React from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button
        type="button"
        className={classes.btnDelete}
        onClick={() => props.onDeleteMovie(props.id)}
      >
        Delete
      </button>
      <button
        onClick={() =>
          props.onEditMovie({
            id: props.id,
            title: props.title,
            openingText: props.openingText,
            releaseDate: props.releaseDate,
          })
        }
        className={classes.btnEdit}
      >
        Edit
      </button>
    </li>
  );
};

export default Movie;
