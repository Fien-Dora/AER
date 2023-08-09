// import { Navbar } from "react-bootstrap";
import "..//assets/Styles/Navbar.css";
import { Outlet } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import { useContext, useState } from "react";
import flag from '../assets/img/flag.png';
import UserContext from "../context/UserContext";

const NavigationBar = () => {
  const [language, setLanguage] = useState("English");
  const title = "Maintenance";
  const {username} = useContext(UserContext)

  return (
    <>
      <div className="navStyle align-content-center flex-wrap" style={{ background: "white" }}>
        <Stack direction="horizontal" gap={4}>
          <div className="p-2 ms-2 fs-5">{title}</div>
          <div className="p-2 ms-auto">
            <div className="d-flex">

              <p className="mt-2">
                <img src={flag} alt="flag" style={{ width: "20px" }}/>
                Lang:</p>
              <div className="dropdown-center">
                <div
                  className="btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {language}
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="btn"
                      onClick={() => setLanguage("English")}
                    >
                      English
                    </button>
                  </li>
                  <li>
                    <button
                      className="btn"
                      onClick={() => setLanguage("French")}
                    >
                      French
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="p-2">
          <div className="d-flex align-items-baseline">
              <div><p className="fs-6 fw-bold px-2"> { username } </p></div>
              <i className="bi bi-person-fill fs-3"></i>
            </div>
          </div>
        </Stack>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
