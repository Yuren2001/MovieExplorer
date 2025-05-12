import React, { useEffect, useState } from "react";
import _ from "lodash";

import "./MovieList.css";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";

const MovieList = ({ type, title, emoji }) => {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (sort.by !== "default") {
      setFilterMovies((prev) => _.orderBy(prev, [sort.by], [sort.order]));
    }
  }, [sort]);

  const fetchMovies = async () => {
    try {
      let url = "";

      if (type === "trending") {
        url = `https://api.themoviedb.org/3/trending/movie/day?api_key=e2c62f67173692ec6a9ab591be174f2b`;
      } else {
        url = `https://api.themoviedb.org/3/movie/${type}?api_key=e2c62f67173692ec6a9ab591be174f2b`;
      }

      const response = await fetch(url);
      const data = await response.json();

      setMovies(data.results);
      setFilterMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handlefilter = (rate) => {
    if (rate === minRating) {
      setMinRating(0);
      setFilterMovies(movies);
    } else {
      setMinRating(rate);

      const filtered = movies.filter((movie) => movie.vote_average >= rate);
      setFilterMovies(filtered);
    }
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="movie_list" id={type}>
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          {title}{" "}
          <img src={emoji} alt={`${emoji} icon`} className="navbar_emoji" />{" "}
        </h2>

        <div className="align_center movie_list_fs">
          <FilterGroup
            minRating={minRating}
            onRatingClick={handlefilter}
            ratings={[8, 7, 6]}
          />

          <select
            name="by"
            id=""
            onChange={handleSort}
            value={sort.by}
            className="movie_sorting"
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rate</option>
          </select>

          <select
            name="order"
            id=""
            onChange={handleSort}
            value={sort.order}
            className="movie_sorting"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {filterMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}{" "}
      </div>
    </section>
  );
};

export default MovieList;
