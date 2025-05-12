import React from "react";
import "./App.css";
import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png";
import Party from "./assets/Partying-face.png";

import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <MovieList type="trending" title="Trending" emoji={Fire} />
      <MovieList type="top_rated" title="Top Rated" emoji={Star} />
      <MovieList type="upcoming" title="Upcoming" emoji={Party} />
    </div>
  );
};

export default App;
