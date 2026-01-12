import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        🎬 <span>FetchMovies</span>
      </div>

      <nav className="nav">
        <a href="/" className="nav-link">
          Home
        </a>
        <a href="/add-movie" className="nav-link">
          Add Movies
        </a>
        <a href="/contact" className="nav-link">
          Contact Us
        </a>
      </nav>
    </header>
  );
}

export default Header;
