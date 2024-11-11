import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { RecipeContext } from "../context/RecipeContext";
import axios from "axios";
import "./MealDetail.css";

function MealDetail() {
  const {detailsRef} = useContext(RecipeContext);
  const { idMeal } = useParams();
  const [meal, setMeal] = useState(null);
  const [ingrds, setIngrds] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((res) => setMeal(res.data.meals[0]));
      window.scrollTo(0,0);
  }, [idMeal]);

  useEffect(() => {
    if (meal) {
      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        if (ingredient) {
          const measure = meal[`strMeasure${i}`] || "";
          ingredients.push(`${measure} - ${ingredient}`.trim());
        } else {
          break;
        }
      }
      setIngrds(ingredients);
    }
  }, [meal]);

  if (!meal)
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    );

  return (
    <div ref={detailsRef} className="d-flex justify-content-evenly details-container align-items-center meal-detail ">
      <div className=" col-xxl-2 col-xl-2 col-lg-10 col-md-10 col-sm-10 flex-column d-flex card border border-0 rounded-0 preview-meal bg-transparent img-card cookit-font pt-5">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="img-fluid col"
        />
        <center>
          <h4 className="card-subtitle mb-3 font-weight-bold text-danger font-size-3 ">
            {meal.strMeal}
          </h4>
        </center>
        <ul className="d-flex flex-column align-items-start mb-4">
          <li className=" text-justify text-align-left">
            {meal.strCategory} dish
          </li>
          <li className=" text-justify text-align-left">
            From {meal.strArea} Cuisine
          </li>
        </ul>
      </div>
      <div className=" col-md-3 col-sm-12 flex-column d-flex card border border-0 rounded-0 bg-transparent ingrads cookit-font ">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="img-fluid col"
        />
        <center>
          <h4 className="card-subtitle mb-3 text-danger font-weight-bold cookit-font-title font-size-3 ">
            Ingredients
          </h4>
        </center>
        <ul className="d-flex flex-column align-items-start mb-4">
          {ingrds.map((ingredient, index) => (
            <li key={index} className=" text-justify text-align-left">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-md-5 col-sm-12 card instractions bg-transparent border border-0 p-lg-3 ">
        <div className=" card-body instructions-box overflow-auto scroll-bar-none no-scrollbar ">
          <h4 className="card-subtitle text-danger mb-3 text-whites font-weight-bold cookit-font-title font-size-3 ">
            Instructions
          </h4>
          <p className="card-text text-justify ">{meal.strInstructions}</p>
        </div>
      </div>
    </div>
  );
}

export default MealDetail;
