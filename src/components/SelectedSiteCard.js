import { Card, Col, Row } from "react-bootstrap";
import { useSiteData } from "../context/SiteDataContext";

const SelectedSiteCard = () => {

  const { siteData } = useSiteData() || { siteData: "Default Site Data" };
  console.log('site data at site Card', siteData);

  return ( 
    <>
      <Card className="shadow-sm border-0 rounded-pill my-2">
        <Card.Body className=" bg-light">
          <Row>
            <Col><i className="bi bi-house-door"></i> {siteData.Nomdusite}</Col>
            <Col>Capacity: {siteData.Capacité}KW</Col>
            <Col>Region: {siteData.Région}</Col>
            <Col>Division: {siteData.Arrondissement}</Col>
            <Col>Sub-Division: {siteData.Arrondissement}</Col>
            <Col>Phase: {siteData.Phase}</Col>
          </Row>
        </Card.Body>
      </Card>
    </>
   );
}
 
export default SelectedSiteCard;