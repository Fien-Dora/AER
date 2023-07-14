import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DateComponent from "./DatePicker";
import { IoCalendarOutline } from 'react-icons/io5';


const MaintenanceHeader = () => {
  return ( 
    <>
      <Row className=" align-atems-center">
        <Col lg='6'>
          <h2>Air Contidioner</h2>
        </Col>

        <Col lg='3'>
        Visit Date: 
        <IoCalendarOutline className="calendar-icon mx-2" />
          <DateComponent/>
        </Col>

        <Col lg='3'>
         Next Visit:
        <IoCalendarOutline className="calendar-icon mx-2" />
         
         <DateComponent/>
        </Col>
      </Row>
    </>
   );
}
 
export default MaintenanceHeader;