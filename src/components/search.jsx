import { useContext, useState } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";

function RecipeSearch() {
  const navigate = useNavigate();
  const { setSearchTerm, inputRef } = useContext(RecipeContext);
  const [search, setSearch] = useState("");
  const handleScroll = () =>
    window.scrollTo(0, inputRef.current.offsetTop - 50);
  const handleSearch = async() => {
    navigate("/");
    await setSearchTerm(search)
    setSearch("");
    handleScroll();
  };
  return (
    <>
      <div
        
        className="input-group z-index-1 position-relative col-lg-12 col-md-5 d-flex flex-row justify-content-start align-items-center">
        <input
          type="text"
          style={{ outline: "2px solid #48301a" }}
          className="p-2 rounded position-relative  col-12"
          placeholder="Search for recipes"
          value={search}
          id={"CooKT-search"}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search for recipes"
          aria-describedby="button-addon2"
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button
          className="btn btn-outline-secondary bg-transparent border border-0 position-absolute end-0 lens-icon text-warning"
          type="button"
          id="button-addon2"
          onClick={handleSearch}>
          <img className="w-100" src={`${process.env.PUBLIC_URL}/imgs/lens (1).png`} alt="lens-pan" />
        </button>
      </div>
    </>
  );
}

export default RecipeSearch;
