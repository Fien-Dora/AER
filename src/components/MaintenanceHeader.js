import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DateComponent from "./DatePicker";
import { IoCalendarOutline } from "react-icons/io5";
import { Button, Stack } from "react-bootstrap";

const MaintenanceHeader = () => {
  return (
    <>

<Stack direction="horizontal" gap={5}>
      <div className="p-2 fs-2">Equipments</div>
      <div className="p-2 ms-auto">
      Visit Date:
          <IoCalendarOutline className="calendar-icon mx-2" />
          <DateComponent />
      </div>
      <div className="p-2"> Next Visit:
            <IoCalendarOutline className="calendar-icon mx-2" />
            <DateComponent /></div>

      <div className="p-2"><Button variant="success" type="submit" className="ms-4">
            <i> Print a Report</i>
          </Button></div>
    </Stack>
    </>
  );
};

export default MaintenanceHeader;
