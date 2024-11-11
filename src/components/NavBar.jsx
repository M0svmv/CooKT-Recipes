import { NavLink } from "react-router-dom";
import RecipeSearch from "./search";
import { RecipeContext } from "../context/RecipeContext";
import { useContext, useState } from "react";
import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  const {
    categoriesList,
    cuisniesList,
    setCategory,
    setCuisine,
    inputRef,
    setSearchTerm,
    footerRef,
    resetHome,
  } = useContext(RecipeContext);

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isCuisinesOpen, setIsCuisinesOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const toggleCuisines = () => {
    setIsCuisinesOpen(!isCuisinesOpen);
    if (isCategoriesOpen) setIsCategoriesOpen(false);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
    if (isCuisinesOpen) setIsCuisinesOpen(false);
  };

  const handleScroll = () =>
    window.scrollTo(0, inputRef.current.offsetTop - 50);
  const handleContact = () => window.scrollTo(0, footerRef.current.offsetTop);

  const handleNavClick = (callback) => {
    if (callback) callback();
    setIsNavCollapsed(true);
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="navbar-cookit position-fixed w-100 px-lg-5 py-3">
        <Container
          fluid
          className="d-flex justify-content-between align-items-center px-lg-5 px-md-2 cont">
          <Navbar.Brand>
            <NavLink
              className="navbar-brand fw-bold text-cookit logo-container"
              to="/"
              onClick={() => handleNavClick(resetHome)}>
              <img
                src={`${process.env.PUBLIC_URL}/imgs/logoNe.png`}
                alt="CooKT"
                className="logo w-100 p-2"
              />
            </NavLink>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="navbarScroll"
            onClick={() => setIsNavCollapsed(!isNavCollapsed)}
          />
          <Navbar.Collapse
            in={!isNavCollapsed}
            id="navbarScroll"
            className="navbar-cookit collapseNav ">
            <Nav
              className="m-auto my-2 my-lg-0 col-xl-6 col-lg-6 col-sm-12"
              navbarScroll>
              <Nav.Link>
                <NavLink
                  className="nav-link fw-bold nav-text"
                  to="/"
                  onClick={async () => {
                    await handleNavClick(resetHome);
                  }}
                  style={{ color: "#48301a" }}>
                  Home
                </NavLink>
              </Nav.Link>
              <NavDropdown
                title="Cuisines"
                className="nav-link fw-bold nav-text"
                id="navbarScrollingDropdownCuisines">
                <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                  {cuisniesList.map((cuisine, index) => (
                    <NavDropdown.Item
                      key={index}
                      onClick={() =>
                        handleNavClick(() => {
                          handleNavClick(toggleCuisines);
                          setCuisine(cuisine.strArea);
                          handleScroll();
                        })
                      }>
                      {cuisine.strArea}
                    </NavDropdown.Item>
                  ))}
                </div>
              </NavDropdown>
              <NavDropdown
                title="Categories"
                className="nav-link fw-bold nav-text"
                id="navbarScrollingDropdownCategories">
                <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                  {categoriesList.map((category, index) => (
                    <NavDropdown.Item
                      key={index}
                      onClick={() =>
                        handleNavClick(() => {
                          handleNavClick(toggleCategories);
                          setCategory(category.strCategory);
                          handleScroll();
                        })
                      }>
                      {category.strCategory}
                    </NavDropdown.Item>
                  ))}
                </div>
              </NavDropdown>
              <Nav.Link
                className="nav-link fw-bold nav-text d-flex justify-content-center align-items-center"
                style={{ color: "#48301a" }}
                onClick={() => handleNavClick(handleContact)}>
                Contact
              </Nav.Link>
            </Nav>

            <Form
              className="d-flex form-search col-lg-3 col-md-3 col-sm-12"
              onSubmit={(e) => e.preventDefault()}>
              <NavLink
                className="nav-link fw-bold col-3 fav-icon d-flex justify-content-center align-items-center nav-text"
                to="/favorites"
                title="Favorites"
                style={{
                  color: "#48301a",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <img
                  src={`${process.env.PUBLIC_URL}/imgs/fridgeIcon.png`}
                  className="col-12 img-fluid justify-content-center align-items-center"
                  alt="Favorites"
                  onClick={() => handleNavClick(handleContact)}
                />
              </NavLink>
              <RecipeSearch close={() => setIsNavCollapsed(true)} />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
