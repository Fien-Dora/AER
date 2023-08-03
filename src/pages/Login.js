import "..//auth/auth.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AuthSider from "../auth/AuthSider";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <Container fluid className="LoginBG">
        <Row className="justify-content-md-center g-0 d-flex justify-content-around">
          <Col lg="4" className="q p-5">
            <AuthSider />
          </Col>
          <Col>
            <div className="login template d-flex justify-content-center align-items-center vh-100">
              <div className="form_container p-5 rounded bg-white shadow p-3 mb-5 bg-white rounded ">
                <Form>
                  <h3 className="text center">Sign In</h3>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={2}>
                      User:
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="text" placeholder="Email" />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalPassword"
                  >
                    <Form.Label column sm={2}>
                      Password: 
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="password" placeholder="Password" />
                    </Col>
                  </Form.Group>

                  <div className="d-grid">
                    <Button className="btn btn-success " >Sign in</Button>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
