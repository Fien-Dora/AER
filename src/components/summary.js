import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '..//assets/Styles/summary.css'


function Summary() {
  return (
    <Card className='m-4 summary shadow'>
      <Card.Body>
        <Row>
          <Col>
            <div>5 Zones</div>
            <div>350sites</div>
          </Col>
          <Col>
            <div>GPS</div>
            <div>1000M loc</div>
          </Col>
          <Col>
            <div>Maintain</div>
            <div>real time</div>
          </Col>
          <Col>
            <div>history 2k**</div>
            <div></div>
          </Col>
          <Col>
            <div>monitoring 350</div>
            <div>Real time</div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Summary;