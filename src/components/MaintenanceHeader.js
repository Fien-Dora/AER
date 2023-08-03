import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoCalendarOutline } from "react-icons/io5";
import { Button, Stack } from "react-bootstrap";
import DateContext from "../hooks/DateContext";
import { useContext } from "react";

const MaintenanceHeader = ({ onPrintReport }) => {

  const { visitDate, nextVisitDate, setVisitDate, setNextVisitDate } = useContext(DateContext);

  return (
    <>
      <Stack direction="horizontal">
        <div className="p-2 fs-2">Equipments</div>
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
