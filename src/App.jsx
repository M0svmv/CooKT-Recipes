import "./App.css";
import Favorites from "./components/Favorites";
import RecipeProvider from "./context/RecipeContext";
import PageLayout from "./layout/PageLayout";
// import Categories from "./pages/Catigories";
import Home from "./pages/home";
import MealDetail from "./pages/MealDetail";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route index element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      {/* <Route path="/categories" element={<Categories />} /> */}
      <Route path="/meal/:idMeal" element={<MealDetail />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App h-100">
      <RecipeProvider>
        <RouterProvider router={router} />
      </RecipeProvider>
    </div>
  );
}

export default App;
