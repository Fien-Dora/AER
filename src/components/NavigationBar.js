import { Navbar} from 'react-bootstrap';
import '..//assets/Styles/Navbar.css'
import Button from 'react-bootstrap/Button';
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
    <div className="navStyle">
      <Navbar expand="lg" className='p-2 g-0 navBg' >
        <Navbar.Brand className='ms-4' href="#">Maintainance</Navbar.Brand>
        
        {/* Date pick */}
        {/* <h1>Selected Date: {selectedDate ? selectedDate.toDateString() : 'None'}</h1>
        <DatePicker selected={selectedDate} onChange={handleDateChange} /> */}

        <div className="ms-5">
          <Button variant="success" className='print px-3'>
            <i className="bi bi-printer pe-2"></i>
            <i>print report</i>
          </Button>
        </div>      
      </Navbar>
    </div>
  );
};

export default NavigationBar;