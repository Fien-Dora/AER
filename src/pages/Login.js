import '..//auth/auth.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AuthSider from '../auth/AuthSider';

const Login = () => {
  return (
    <> 
      <Container fluid className='LoginBG' >
        <Row className="justify-content-md-center g-0 d-flex justify-content-around">
          <Col lg="4" className='q p-5'>
            <AuthSider/>
          </Col>
          <Col>
            <div className="login template d-flex justify-content-center align-items-center vh-100">
              <div className="form_container p-5 rounded bg-white shadow p-3 mb-5 bg-white rounded ">
                <form action="#">
                  <h3 className="text center">Sign In</h3>
                  <div className="md-2">
                    <label htmlFor="text">User Name</label>
                    <input type="name" name="email" placeholder="User Name" className='form-control'/>
                  </div>

                  <div className="mb-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Enter Password" className='form-control'/>
                  </div>


                  <div className="d-grid">
                    <button className="btn btn-primary">Sign in</button>
                  </div>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
   );
}
 
export default Login;