import React from "react";
import "./Navbar.css";
import DarkMode from "../DarkMode/DarkMode";
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";
import Heart from "../../assets/heart.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Movie Explorer</h1>

      <div className="navbar_links">
        <DarkMode />
        <a href="#trending">
          Trending <img src={Fire} alt="fire emoji" className="navbar_emoji" />
        </a>

        <a href="#top_rated">
          Top Rated <img src={Star} alt="star emoji" className="navbar_emoji" />
        </a>

        <a href="#upcoming">
          Upcoming{" "}
          <img src={Party} alt="party face emoji" className="navbar_emoji" />
        </a>

        {/* <a href="">
          My Favorites{" "}
          <img src={Heart} alt="heart emoji" className="navbar_emoji" />
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
