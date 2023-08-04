import Summary from "../components/summary.js";
import Statistics from "../components/sites/Statistics.js";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import useFetch from "../hooks/useFetch.js";
import { Link } from "react-router-dom";
import UserContext from "../hooks/UserContext";
import { useContext, useState } from "react";


const Home = () => {
  const { data: zones, isLoading, error } = useFetch("http://localhost:8006/zones");
  const { username } = useContext(UserContext);

  return ( 
    <>
      <Container fluid className="min-vh-100 background: #F0F2F5 ">
        <Row>
          <Col>
            <Summary/>
            <Row>

            {/* <Statistics/> */}
            {isLoading && <li><p className="text-primary text-center">Loading...</p></li>}
              {error && <li><p className="text-primary text-center">{error}</p></li>}
              {zones &&
                zones.map((zone) => (
                  <Col sm={12} md={6} lg={4} xl={3} xxl={2} >
                    <Card className="shadow my-2">
                      <Card.Body style={{ width: '10rem' }} >
                        <Card.Title class=''>Zone {zone.id}</Card.Title>
                        <Card.Text>{zone.data.length} Sites</Card.Text>
                        <Link to={`/zone/${zone.id}`}>
                          <button className="btn btn-secondary">Visit Zone</button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              }
            </Row>
          </Col>
        </Row>
      </Container>
    </>
   );
}
 
export default Home;