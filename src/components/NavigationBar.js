import { Navbar } from "react-bootstrap";
import "..//assets/Styles/Navbar.css";
import Button from "react-bootstrap/Button";
import { Outlet } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import { useState } from "react";
// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';

// const MyDatePicker = () => {
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };
// };

const NavigationBar = () => {
const [language, setLanguage] = useState("English");

  return (
    <>
      <div className="navStyle">
        <Navbar expand="lg" className="p-2 g-0 navBg">
          <Stack direction="horizontal" gap={5}>
            <Navbar.Brand className="ms-4" href="#">
              Maintainance
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
          </Stack>
        </Navbar>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
