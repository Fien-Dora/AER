import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Todo from "../components/Todo.js";

const Maintain = () => {
  return (
    <>
      <Container fluid className="min-vh-100 background: #F0F2F5 ">
        <Row>
          <Col className="col-2 g-0 "></Col>
          <Col>
            <Todo />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Maintain;
