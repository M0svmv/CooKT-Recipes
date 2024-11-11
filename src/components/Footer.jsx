import {
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { RecipeContext } from "../context/RecipeContext";
import { useContext } from "react";
function Footer() {
  const { footerRef } = useContext(RecipeContext);
  return (
    <>
      <footer
        ref={footerRef}
        style={{ backgroundColor: "#c7a575!important" }}
        className="text-center text-lg-start footer p-2 cookit-font text-danger">
        <section>
          <div className="container text-center bg-transparent text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase text-cookit fw-bold mb-4 d-flex flex-column align-items-center gap-2">
                  <img
                    src={`${process.env.PUBLIC_URL}/imgs/logoNe.png`}
                    alt="CooKT"
                    style={{ width: "100px" }}
                  />
                  {"Eat Something New!!"}
                </h6>
                <p></p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 text-cookit">
                  Social Media
                </h6>
                <p>
                  <a
                    href="https://www.facebook.com/MOsvmv17"
                    className=" text-decoration-none text-cookit-links"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaFacebookSquare /> &nbsp; FaceBook
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.instagram.com/m.osama_17/"
                    className="text-cookit-links text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaInstagram /> &nbsp; Instagram
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.linkedin.com/in/mohamed-osama3000/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cookit-links text-decoration-none">
                    <FaLinkedin /> &nbsp; LinkedIn
                  </a>
                </p>
                <p>
                  <a
                    href="https://github.com/M0svmv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cookit-links text-decoration-none">
                    <FaGithub /> &nbsp; GitHub
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase text-cookit fw-bold mb-4">
                  Contact
                </h6>
                <p className="text-cookit-links">
                  <MdOutlineEmail /> &nbsp; medoosama822@gmail.com
                </p>
                <p className="text-cookit-links">
                  <MdOutlineLocalPhone /> &nbsp; + 20 100 420 4036
                </p>
                <p className="text-cookit-links">
                  <MdOutlineEmail /> &nbsp; reem1619123@gmail.com
                </p>
                <p className="text-cookit-links">
                  <MdOutlineLocalPhone /> &nbsp; + 20 102 239 1604
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4 text-cookit-links"
          style={{
            borderTop: "1px solid #48301a",
            width: "75%",
            margin: " auto",
          }}>
          © 2024 Copyright:@
          <a
            className=" text-cookit-links"
            href="https://www.linkedin.com/in/mohamed-osama3000/"
            target="_blank"
            rel="noopener noreferrer">
            MohamedOsama
          </a>
          &nbsp;|&nbsp;@
          <a
            className="text-cookit-links "
            href="https://www.linkedin.com/in/reemmohamed3000/"
            target="_blank"
            rel="noopener noreferrer">
            ReemMohamed
          </a>
        </div>
        {/* Copyright */}
      </footer>
    </>
  );
}

export default Footer;
