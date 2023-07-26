import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '..//assets/Styles/summary.css'


function Summary() {
  return (
    <Card className='m-4 summary'>
      <Card.Body>
        <Row>
          <Col>Zone 1</Col>
          <Col>Zone 2</Col>
          <Col>Zone 3</Col>
          <Col>Zone 4</Col>
          <Col>Zone 5</Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Summary;