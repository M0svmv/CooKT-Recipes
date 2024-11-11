import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import "./HeroSection.css";

function HeroSection() {
  const { inputRef } = useContext(RecipeContext);

  const handleScroll = () =>
    window.scrollTo(0, inputRef.current.offsetTop - 50);

  return (
    <div className="hero-section">
      <div
        style={{
          backgroundImage: "url('./imgs/paper5.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="col-12 d-flex shadow hero-background">
        <div
          className="col-12 d-flex flex-column flex-md-row p-4 p-md-5 justify-content-evenly align-items-center hero-content gap-lg-5 gap-md-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
          {/* Logo Section */}
          <div className="col-10 col-md-4 d-flex justify-content-center align-items-center hero-logo mb-4 mb-md-0">
            <img
              style={{
                filter: "drop-shadow(2px 3px 7px rgba(0, 0, 0, 0.3))",
              }}
              src="./imgs/heroLogo.png"
              alt="CooKT"
              className="logo w-75"
            />
          </div>

          {/* Text Section */}
          <div className="col-10 col-md-5 d-flex justify-content-center align-items-center flex-column text-center text-md-start ">
            <center>
              <h1 className="hero-heading text-cookit  display-1">
                Hungry?
                <br />
                Eat something new!!
              </h1>
            </center>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center ">
              <button
                onClick={handleScroll}
                className="btn btn-hero position-relative mt-4  px-5">
                Show Recipes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
