import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoCalendarOutline } from "react-icons/io5";
import { Button, Stack } from "react-bootstrap";
import DateContext from "../context/DateContext";
import { useContext } from "react";
import { useCategoryName } from "../context/CategoryNameContext";

const MaintenanceHeader = ({ onPrintReport }) => {

  const { visitDate, nextVisitDate, setVisitDate, setNextVisitDate } = useContext(DateContext);
 
  const { CategoryName } = useCategoryName() || { categoryName: "Default Category" };
  console.log('CategoryName', CategoryName)


  return (
    <>
      <Stack direction="horizontal">
        <div className="p-2 fs-2">{CategoryName}</div>
        <div className="p-2 ms-auto">
          Visit Date:
          <IoCalendarOutline className="calendar-icon mx-2" />
          <DatePicker
            selected={visitDate}
            onChange={(date) => setVisitDate(date)}
            dateFormat="dd/MM/yyyy"
            className="border-0 bg-transparent"
          />
        </div>
        <div className="p-2">
          Next Visit:
          <IoCalendarOutline className="calendar-icon mx-2" />
          <DatePicker
            selected={nextVisitDate}
            onChange={(date) => setNextVisitDate(date)}
            dateFormat="dd/MM/yyyy"
            className="border-0 bg-transparent"
          />
        </div>
        <div className="p-2">
          <Button variant="success" type="submit" className="ms-4" onClick={onPrintReport}>
            <i> Print a Report</i>
          </Button>
        </div>
      </Stack>
    </>
  );
};

export default MaintenanceHeader;
