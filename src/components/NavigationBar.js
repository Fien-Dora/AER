import { Navbar } from "react-bootstrap";
import "..//assets/Styles/Navbar.css";
import Button from "react-bootstrap/Button";
import { Outlet } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';

// const MyDatePicker = () => {
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };
// };

const NavigationBar = () => {
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
          </Stack>
        </Navbar>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
