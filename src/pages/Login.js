import "..//auth/auth.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AuthSider from "../auth/AuthSider";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import UserContext from '../context/UserContext'

const Login = () => {
  const { username, setUsername } = useContext(UserContext);
  const [password, setPassword] = useState("");

  const usenavigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Validate the input fields
    if (validate()) {
      // Fetch the user data from the server
      fetch('http://localhost:8006/users/')
        .then((res) => {
          return res.json(); // Parse the response body as JSON
        })
        .then((data) => {
          console.log(data);

          if (data.length === 0) {
            toast.error('please enter valid username');
          } else {
            const user = data.find((user) => user.username.trim().toLowerCase() === username.trim().toLowerCase());

            if (!user) {
              toast.error('please enter valid username');
              alert('invalid username');
            } else {
              if (user.password === password) {
                toast.success('login successful');
                 setUsername(user.username);
                usenavigate('/Home');
              } else {
                toast.error('password is incorrect');
                alert('invalid password');
              }
            }
          }
        })
        .catch((err) => {
          toast.error('login failed due to : ' + err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (username === "" || username === null || username === undefined) {
      result = false;
      toast.warning("Please enter username");
    }
    if (password === "" || password === null || password === undefined) {
      result = false;
      toast.warning("Please enter username");
    }
    return result;
  };

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
                <Form onSubmit={handleLogin}>
                  <h3 className="text center">Sign In</h3>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalName"
                  >
                    <Form.Label column sm={2}>
                      User:
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        value={username}
                        type="text"
                        placeholder="name"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                      />
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
                      <Form.Control
                        value={password}
                        type="password"
                        placeholder="Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className=" d-grid">
                    <Button type="submit" className="btn btn-success">
                      Sign in
                    </Button>
                  </Form.Group>
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
