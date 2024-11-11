import { createContext, useState, useEffect, useRef } from "react";
import axios from "axios";

export const RecipeContext = createContext();

function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);
  const [categories, setCategories] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [cuisniesList, setCuisinesList] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);
  const [category, setCategory] = useState("");
  const [cuisine, setCuisine] = useState("");

  const footerRef = useRef(null);
  const detailsRef = useRef(null);

  let favRecipes = JSON.parse(localStorage.getItem("favRecipes")) || [];

  const [favorites, setFavorites] = useState(favRecipes);

  const addFavorite = (recipe) => {
    if (favorites.some((fav) => fav.idMeal === recipe.idMeal)) {
      return;
    }
    setFavorites([...favorites, recipe]);
    localStorage.setItem("favRecipes", JSON.stringify([...favorites, recipe]));
  };

  const removeFavorite = (idMeal) => {
    const updatedFavorites = favorites.filter(
      (recipe) => recipe.idMeal !== idMeal
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favRecipes", JSON.stringify(updatedFavorites));
  };

  const getRecipes = async (search) => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      setRecipes(response.data.meals || []);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setCategories(response.data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  const getCategoriesList = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
      );
      setCategoriesList(response.data.meals);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const getAreaList = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
      );
      setCuisinesList(response.data.meals);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const cuisnieFilter = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisine}`
      );
      setRecipes(response.data.meals);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const categoryFilter = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      setRecipes(response.data.meals);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const getRandomRecipe = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );

      setRecipes([response.data.meals[0]]);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  useEffect(() => {
    setSwiperRef(swiperRef);
    getRecipes(searchTerm);
  }, [searchTerm, swiperRef, setSearchTerm]);
  useEffect(() => {
    getCategories();
    getCategoriesList();
    getAreaList();
  }, []);

  useEffect(() => {
    if (category) {
      categoryFilter();
    } else {
      getRecipes(searchTerm);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);
  useEffect(() => {
    if (cuisine) {
      cuisnieFilter();
    } else {
      getRecipes(searchTerm);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cuisine]);

  const resetHome = () => {
    setCategory("");
    setCuisine("");
    setSearchTerm("");
  };
  return (
    <RecipeContext.Provider
      value={{
        recipes,
        searchTerm,
        setSearchTerm,
        inputRef,
        categories,
        swiperRef,
        setSwiperRef,
        categoriesList,
        cuisniesList,
        setCategory,
        setCuisine,
        footerRef,
        getRandomRecipe,
        resetHome,
        detailsRef,
        addFavorite,
        favorites,
        removeFavorite,
      }}>
      {children}
    </RecipeContext.Provider>
  );
}

export default RecipeProvider;
