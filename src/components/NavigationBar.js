// import { Navbar } from "react-bootstrap";
import "..//assets/Styles/Navbar.css";
import { Outlet } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import { useState } from "react";
import { Button } from "react-bootstrap";
import flag from '../assets/img/flag.png'

const NavigationBar = () => {
  const [language, setLanguage] = useState("English");
  const title = "Maintenance";

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
              <div><p className="fs-6 fw-bold">Fien Dora</p></div>
              <i className="bi bi-person-fill fs-3"></i>
            </div>
          </div>
        </Stack>

        {/* <Navbar expand="lg" className="p-2 g-0 navBg">
          <Stack direction="horizontal" gap={5}>
            <Navbar.Brand className="ms-4" href="#">
              { title }
            </Navbar.Brand>
            <div className="ms-5 ">
              <Button variant="success" className="print px-3">
                <i className="bi bi-printer pe-2"></i>
                <i>print report</i>
              </Button>
            </div>
            <div className="d-flex">
              <p className="mt-2">Lang:</p>
              <div className="dropdown-center">
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {language}
                </button>
                <ul className="dropdown-menu">
                  <li><button className="btn" onClick={() => setLanguage("English")}>English</button></li>
                  <li><button className="btn" onClick={() => setLanguage("French")}>French</button></li>
                </ul>
              </div>
            </div>
            <div className="d-flex align-items-baseline">
              <div><p className="fs-5 fw-bold">Fien Dora</p></div>
              <i className="bi bi-person-fill fs-1"></i>
            </div>
          </Stack> */}
        {/* </Navbar> */}
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
