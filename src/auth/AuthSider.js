// import logo from './logo.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AuthSider = () => {
  return ( 
    <>
       <Container>
      <Row>
        <Col className='login align-items-center'>
          <div className='text-primary logoText'> 
            <span className='text-success'>Agence</span>  <span className='text-danger'>d'Electrification</span><span className='text-warning'> Rurale</span> 
          </div>
          <div>
            Rural Electrification Agency
          </div>
          <img src='/logo.jpg' alt="logo_image" className="App-logo" />
        </Col>
      </Row>
    </Container>
    </>
   );
}
 
export default AuthSider;