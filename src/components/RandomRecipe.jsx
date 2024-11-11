import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { RecipeContext } from "../context/RecipeContext";
import { PiChefHat } from "react-icons/pi";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { AiOutlineClose } from "react-icons/ai";

import "./rondom.css";
function RandomRecipe() {
  const location = useLocation();
  const { getRandomRecipe, inputRef } = useContext(RecipeContext);
  const [showPopover, setShowPopover] = useState(false);
  const [runAfterNav, setRunAfterNav] = useState(false);
  const handleScroll = () =>
    window.scrollTo(0, inputRef.current.offsetTop - 50);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopover(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (runAfterNav && location.pathname === "/") {
      // Execute the functions only when on the "/" path after navigation
      getRandomRecipe();
      setShowPopover(false);
      handleScroll();
      setRunAfterNav(false); // Reset the flag to prevent re-triggering
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, runAfterNav]);

  const handleDismiss = () => {
    setShowPopover(false);
  };

  const popover = (
    <Popover className="popover-msg" id="popover-basic">
      <Popover.Body className="d-flex justify-content-between align-items-center">
        <span>Need a meal idea? Try a random recipe!</span>

        <AiOutlineClose
          onClick={handleDismiss}
          style={{ cursor: "pointer", color: "grey", fontSize: "1.2rem" }}
          aria-label="Close pop-up"
        />
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger show={showPopover} placement="top" overlay={popover}>
      <NavLink
        to="/"
        onClick={() => {
          getRandomRecipe();
          setShowPopover(false);
          handleScroll();
        }}
        aria-label="Get a random recipe"
        className="btn rounded-circle fs-3 pt-0 m-3 btn-chef position-fixed mt-4">
        <PiChefHat />
      </NavLink>
    </OverlayTrigger>
  );
}

export default RandomRecipe;
