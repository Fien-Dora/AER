import Summary from "../components/summary.js";
import Statistics from "../components/sites/Statistics.js";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const Home = () => {
  return ( 
    <>
      <Container fluid className="min-vh-100 background: #F0F2F5 ">
        <Row>

          <Col>
            <Summary/>

            <Statistics/>
          </Col>
        </Row>
      </Container>
    </>
   );
}
 
export default Home;