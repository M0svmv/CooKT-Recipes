import { useContext, useEffect, useState } from "react";
import { RecipeContext } from "../context/RecipeContext";
import MealCard from "./MealCardFav";
import { Pagination } from "react-bootstrap";

function Favorites() {
  const { favorites } = useContext(RecipeContext);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 6;

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = favorites.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const totalPages = Math.ceil(favorites.length / recipesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="container mt-5 d-flex flex-wrap gap-5 col-12 justify-content-start align-items-center z-index-1 home mb-5">
      <p
        style={{
          position: "relative",
          filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.2))",
          color: "#48301a!important",
        }}
        className="cat-title cookit-font display-5 text-cookit mb-0 col-lg-3 ms-3 text-center">
        Favorites{" "}
        <img
          style={{
            width: "5rem",
            position: "absolute",
            top: "0rem",
            left: "-2rem",
            filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.2))",
          }}
          src={`${process.env.PUBLIC_URL}/imgs/pin.png`}
          alt=""
        />
      </p>
      <div className="mt-0 d-flex flex-wrap gap-5 col-12 justify-content-center mt-0 pt-0 align-items-center z-index-1 mb-5">
        <div className="d-flex container flex-wrap gap-5 justify-content-center">
          {currentRecipes.map((recipe) => (
            <MealCard key={recipe.idMeal} {...recipe} />
          ))}
        </div>

        {/* Styled Pagination */}
        <div className="d-flex justify-content-center mt-4 m-auto">
          <Pagination className="custom-pagination">
            <Pagination.Prev
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            />
            {Array.from({ length: totalPages }, (_, index) => (
              <Pagination.Item
                key={index + 1}
                active={currentPage === index + 1}
                onClick={() => paginate(index + 1)}>
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
          </Pagination>
        </div>
      </div>
    </div>
  );
}

export default Favorites;
