import Summary from "../components/summary.js";
import Statistics from "../components/sites/Statistics.js";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import useFetch from "../hooks/useFetch.js";
import { Link } from "react-router-dom";

const Home = () => {
  const { data: zones, isLoading, error } = useFetch("http://localhost:8000/zones");

  return ( 
    <>
      <Container fluid className="min-vh-100 background: #F0F2F5 ">
        <Row>

          <Col>
            <Summary/>

            {/* <Statistics/> */}
            {isLoading && <li><p className="text-primary text-center">Loading...</p></li>}
              {error && <li><p className="text-primary text-center">{error}</p></li>}
              {zones &&
                zones.map((zone) => (
                    <Card>
                      <Card.Body>
                        <Card.Title class=''>Zone {zone.id}</Card.Title>
                        <Card.Text>{zone.data.length} Sites</Card.Text>
                        <Link to={`/zone/${zone.id}`}>
                          <button className="btn btn-primary">Visit Zone</button>
                        </Link>
                      </Card.Body>
                    </Card>
                ))
              }
          </Col>
        </Row>
      </Container>
    </>
   );
}
 
export default Home;