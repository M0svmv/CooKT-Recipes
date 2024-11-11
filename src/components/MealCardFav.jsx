import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import "./MealCard.css";
import axios from "axios";

function MealCard({
  idMeal,
  strMeal,
  strMealThumb,
  strInstructions,
  strArea,
  strCategory,
}) {
  const { removeFavorite } = useContext(RecipeContext);
  const handleFavorite = () => {
    const response = axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
    response.then((res) => removeFavorite(res.data.meals[0].idMeal));
  };
  return (
    <div className="cookit-font card col-xl-3 col-lg-4 col-md-5 col-sm-12 z-index-1 meal-card shadow d-flex flex-row flex-wrap text-decoration-none">
      <div className="card-body col-7">
        <h5 className="card-title text-danger font-weight-bold ">{strMeal}</h5>
        {strInstructions && (
          <p className="card-text text-cookit">{strArea} Cuisine</p>
        )}
        {strInstructions && (
          <p className="card-text text-cookit"> {strCategory} Dish</p>
        )}
      </div>
      <div className="card-side col-5">
        <img
          style={{ filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.2))" }}
          src={strMealThumb}
          className="card-img-top"
          alt={strMeal}
        />
      </div>
      <div className="d-flex justify-content-center align-items-center col-12 p-2 gap-2 mb-2">
        <NavLink
          to={`/meal/${idMeal}`}
          className="btn border border-2 border-danger col-4 text-danger btn-show position-relative">
          Show Meal
        </NavLink>
        <button
          onClick={() => handleFavorite()}
          className="btn rounded-circle col-2 p-2  position-absolute top-0 end-0 ">
          <img className="w-100 fridge-icon " src="./imgs/heart.png" alt="" />
        </button>
      </div>

      <img
        src="./imgs/tape.png"
        className="position-absolute col-6 tape"
        alt="tape"
      />
    </div>
  );
}

export default MealCard;
