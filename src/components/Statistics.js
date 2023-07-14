import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Styles/Statistics.css';
import '../index.css'
import search from '../assets/img/search.png';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from "react-router-dom"


function Statistics() {
  return (
    <>
      <Row className='mx-2 responsiveTable'>
        <Col lg="3" >
          <div className="site-search" id="js-search">
            <img src={search} alt="searchIcon" />
            <input type="text" className='search' placeholder='search site' />
          </div>
        </Col>

        <Col lg='2'>
          <Form.Select aria-label="Default select example" className='sort-by'>
            <option> 
            <i class="bi bi-sort-alpha-down"></i>
               Sortby</option>
            <option value="name">name</option>
            <option value="capacity">capacity</option>
          </Form.Select>
        </Col>

        <Col lg='4' className='px-1'>
          
        </Col>
        <Col>
        <a href="/" className="list-group-item border-0">
          <div className='text-success new-site p-1'>
            <i className="bi bi-pencil-square text-success mx-2"></i>Create New Site
          </div>
        </a>
        </Col>
      </Row>


      <Card className='mx-4 my-2'>
        <Card.Body>
          <div className='responsiveTable'>
        <Table striped bordered hover responsive >
          <thead className='bg-secondary'>
            <tr>
              <th className='p-1 px-2'>ID</th>
              <th className='p-1 px-2'> Action </th>
              <th className='p-1'>Nom du site</th>
              <th className='p-1'>Capacite /KW</th>
              <th className='p-1'>Region</th>
              <th className='p-1'>Departement</th>
              <th className='p-1'>Arrondissement</th>
              <th className='p-1'>Phase</th>
              <th className='p-1'>Charge actuelle</th>
              <th className='p-1'>Charge reelle</th>
              <th className='p-1'>Taux d'utilisation /%</th>
              <th className='p-1'>Longueur réseau (km)</th>
              <th className='p-1'>Modèle/Type Bat</th>
              <th className='p-1'>Nb Batteries</th>
              <th className='p-1'>Etat Bat</th>
              <th className='p-1'>Nombre de panneaux</th>
              <th className='p-1'>Type panneaux</th>
              <th className='p-1'>Etat panneaux</th>
              <th className='p-1'>Model/Type Ond</th>
              <th className='p-1'>Capacite Ond</th>
              <th className='p-1'>Contrôleurs de Charge</th>
              <th className='p-1'>Cab distribution</th>
              <th className='p-1'>Nombre</th>
              <th className='p-1'>Statu Centrale</th>
              <th className='p-1'>Observations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='p-1 px-2 align-content-center'>1</td>
              <td className='p-1'>
                <Row className='px-3'>
                  {/* Edit */}
                  <Col>
                    <a href="/" className="list-group-item border-0">
                    <i className="bi bi-pencil-square text-success mx-2"></i>
                    </a>
                  </Col>
                  {/* Delete */}
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i className="bi bi-trash text-danger"></i>
                    </a>
                  </Col>
                  {/* Maintainace */}
                  <Col>
                    <Link to="/Category" className="list-group-item border-0">
                      <i class="bi bi-gear-fill"></i>
                    </Link>
                  </Col>
                </Row>
              </td>


              <td className='p-1'>Dir</td>
              <td className='p-1'>100</td>
              <td className='p-1'>Adamaoua</td>
              <td className='p-1'>Mbere</td>
              <td className='p-1'>Mbere</td>
              <td className='p-1'>Phase1</td>
              <td className='p-1'>89</td>
              <td className='p-1'>162</td>
              <td className='p-1'>55</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Lithium-ion 460.8V/480Ah</td>
              <td className='p-1'>72</td>
              <td className='p-1'>0</td>
              <td className='p-1'>300</td>
              <td className='p-1'>Pc = 270W, Model = SINGYES solar (Hunan)</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Model: PowerCube5000/ SUN2000-150KTL-S0</td>
              <td className='p-1'>150kW/150kVA</td>
              <td className='p-1'>null</td>
              <td className='p-1'>WATT ELECTRICAL/ DISJONCTEUR NDM1-63 C32</td>
              <td className='p-1'>1 Extracteur, 2 Climatiseurs</td>
              <td className='p-1'>En Marche</td>
              <td className='p-1'>RAS</td>
            </tr>
            {/* <tr>
              <td className='p-1'>2</td>
              <td className='p-1'>
                <Row className='px-3'>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i className="bi bi-pencil-square text-primary"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i className="bi bi-trash text-danger"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i class="bi bi-gear-fill"></i>
                    </a>
                  </Col>
                </Row>
              </td>
              <td className='p-1'>Beka Giuwang</td>
              <td className='p-1'>100</td>
              <td className='p-1'>Adamaoua</td>
              <td className='p-1'>Faro et Deo</td>
              <td className='p-1'>Faro et Deo</td>
              <td className='p-1'>Phase1</td>
              <td className='p-1'>89</td>
              <td className='p-1'>162</td>
              <td className='p-1'>55</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Lithium-ion 460.8V/480Ah</td>
              <td className='p-1'>72</td>
              <td className='p-1'>0</td>
              <td className='p-1'>300</td>
              <td className='p-1'>Pc = 270W, Model = SINGYES solar (Hunan)</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Model: PowerCube5000/ SUN2000-150KTL-S0</td>
              <td className='p-1'>150kW/150kVA</td>
              <td className='p-1'>null</td>
              <td className='p-1'>WATT ELECTRICAL/ DISJONCTEUR NDM1-63 C32</td>
              <td className='p-1'>1 Extracteur, 2 Climatiseurs</td>
              <td className='p-1'>En Marche</td>
              <td className='p-1'>RAS</td>
            </tr>
            <tr>
              <td className='p-1'>1</td>
              <td className='p-1'>
                <Row className='px-3'>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i className="bi bi-pencil-square text-primary"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i className="bi bi-trash text-danger"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i class="bi bi-gear-fill"></i>
                    </a>
                  </Col>
                </Row>
              </td>


              <td className='p-1'>Dir</td>
              <td className='p-1'>100</td>
              <td className='p-1'>Adamaoua</td>
              <td className='p-1'>Mbere</td>
              <td className='p-1'>Mbere</td>
              <td className='p-1'>Phase1</td>
              <td className='p-1'>89</td>
              <td className='p-1'>162</td>
              <td className='p-1'>55</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Lithium-ion 460.8V/480Ah</td>
              <td className='p-1'>72</td>
              <td className='p-1'>0</td>
              <td className='p-1'>300</td>
              <td className='p-1'>Pc = 270W, Model = SINGYES solar (Hunan)</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Model: PowerCube5000/ SUN2000-150KTL-S0</td>
              <td className='p-1'>150kW/150kVA</td>
              <td className='p-1'>null</td>
              <td className='p-1'>WATT ELECTRICAL/ DISJONCTEUR NDM1-63 C32</td>
              <td className='p-1'>1 Extracteur, 2 Climatiseurs</td>
              <td className='p-1'>En Marche</td>
              <td className='p-1'>RAS</td>
            </tr>
            <tr>
              <td className='p-1'>2</td>
              <td className='p-1'>
                <Row className='px-3'>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i className="bi bi-pencil-square text-primary"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i className="bi bi-trash text-danger"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i class="bi bi-gear-fill"></i>
                    </a>
                  </Col>
                </Row>
              </td>
              <td className='p-1'>Beka Giuwang</td>
              <td className='p-1'>100</td>
              <td className='p-1'>Adamaoua</td>
              <td className='p-1'>Faro et Deo</td>
              <td className='p-1'>Faro et Deo</td>
              <td className='p-1'>Phase1</td>
              <td className='p-1'>89</td>
              <td className='p-1'>162</td>
              <td className='p-1'>55</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Lithium-ion 460.8V/480Ah</td>
              <td className='p-1'>72</td>
              <td className='p-1'>0</td>
              <td className='p-1'>300</td>
              <td className='p-1'>Pc = 270W, Model = SINGYES solar (Hunan)</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Model: PowerCube5000/ SUN2000-150KTL-S0</td>
              <td className='p-1'>150kW/150kVA</td>
              <td className='p-1'>null</td>
              <td className='p-1'>WATT ELECTRICAL/ DISJONCTEUR NDM1-63 C32</td>
              <td className='p-1'>1 Extracteur, 2 Climatiseurs</td>
              <td className='p-1'>En Marche</td>
              <td className='p-1'>RAS</td>
            </tr>
            <tr>
              <td className='p-1'>1</td>
              <td className='p-1'>
                <Row className='px-3'>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i className="bi bi-pencil-square text-primary"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i className="bi bi-trash text-danger"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i class="bi bi-gear-fill"></i>
                    </a>
                  </Col>
                </Row>
              </td>


              <td className='p-1'>Dir</td>
              <td className='p-1'>100</td>
              <td className='p-1'>Adamaoua</td>
              <td className='p-1'>Mbere</td>
              <td className='p-1'>Mbere</td>
              <td className='p-1'>Phase1</td>
              <td className='p-1'>89</td>
              <td className='p-1'>162</td>
              <td className='p-1'>55</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Lithium-ion 460.8V/480Ah</td>
              <td className='p-1'>72</td>
              <td className='p-1'>0</td>
              <td className='p-1'>300</td>
              <td className='p-1'>Pc = 270W, Model = SINGYES solar (Hunan)</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Model: PowerCube5000/ SUN2000-150KTL-S0</td>
              <td className='p-1'>150kW/150kVA</td>
              <td className='p-1'>null</td>
              <td className='p-1'>WATT ELECTRICAL/ DISJONCTEUR NDM1-63 C32</td>
              <td className='p-1'>1 Extracteur, 2 Climatiseurs</td>
              <td className='p-1'>En Marche</td>
              <td className='p-1'>RAS</td>
            </tr>
            <tr>
              <td className='p-1'>2</td>
              <td className='p-1'>
                <Row className='px-3'>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i className="bi bi-pencil-square text-primary"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i className="bi bi-trash text-danger"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i class="bi bi-gear-fill"></i>
                    </a>
                  </Col>
                </Row>
              </td>
              <td className='p-1'>Beka Giuwang</td>
              <td className='p-1'>100</td>
              <td className='p-1'>Adamaoua</td>
              <td className='p-1'>Faro et Deo</td>
              <td className='p-1'>Faro et Deo</td>
              <td className='p-1'>Phase1</td>
              <td className='p-1'>89</td>
              <td className='p-1'>162</td>
              <td className='p-1'>55</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Lithium-ion 460.8V/480Ah</td>
              <td className='p-1'>72</td>
              <td className='p-1'>0</td>
              <td className='p-1'>300</td>
              <td className='p-1'>Pc = 270W, Model = SINGYES solar (Hunan)</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Model: PowerCube5000/ SUN2000-150KTL-S0</td>
              <td className='p-1'>150kW/150kVA</td>
              <td className='p-1'>null</td>
              <td className='p-1'>WATT ELECTRICAL/ DISJONCTEUR NDM1-63 C32</td>
              <td className='p-1'>1 Extracteur, 2 Climatiseurs</td>
              <td className='p-1'>En Marche</td>
              <td className='p-1'>RAS</td>
            </tr>
            <tr>
              <td className='p-1'>1</td>
              <td className='p-1'>
                <Row className='px-3'>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i className="bi bi-pencil-square text-primary"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i className="bi bi-trash text-danger"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i class="bi bi-gear-fill"></i>
                    </a>
                  </Col>
                </Row>
              </td>


              <td className='p-1'>Dir</td>
              <td className='p-1'>100</td>
              <td className='p-1'>Adamaoua</td>
              <td className='p-1'>Mbere</td>
              <td className='p-1'>Mbere</td>
              <td className='p-1'>Phase1</td>
              <td className='p-1'>89</td>
              <td className='p-1'>162</td>
              <td className='p-1'>55</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Lithium-ion 460.8V/480Ah</td>
              <td className='p-1'>72</td>
              <td className='p-1'>0</td>
              <td className='p-1'>300</td>
              <td className='p-1'>Pc = 270W, Model = SINGYES solar (Hunan)</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Model: PowerCube5000/ SUN2000-150KTL-S0</td>
              <td className='p-1'>150kW/150kVA</td>
              <td className='p-1'>null</td>
              <td className='p-1'>WATT ELECTRICAL/ DISJONCTEUR NDM1-63 C32</td>
              <td className='p-1'>1 Extracteur, 2 Climatiseurs</td>
              <td className='p-1'>En Marche</td>
              <td className='p-1'>RAS</td>
            </tr>
            <tr>
              <td className='p-1'>2</td>
              <td className='p-1'>
                <Row className='px-3'>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i className="bi bi-pencil-square text-primary"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i className="bi bi-trash text-danger"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i class="bi bi-gear-fill"></i>
                    </a>
                  </Col>
                </Row>
              </td>
              <td className='p-1'>Beka Giuwang</td>
              <td className='p-1'>100</td>
              <td className='p-1'>Adamaoua</td>
              <td className='p-1'>Faro et Deo</td>
              <td className='p-1'>Faro et Deo</td>
              <td className='p-1'>Phase1</td>
              <td className='p-1'>89</td>
              <td className='p-1'>162</td>
              <td className='p-1'>55</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Lithium-ion 460.8V/480Ah</td>
              <td className='p-1'>72</td>
              <td className='p-1'>0</td>
              <td className='p-1'>300</td>
              <td className='p-1'>Pc = 270W, Model = SINGYES solar (Hunan)</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Model: PowerCube5000/ SUN2000-150KTL-S0</td>
              <td className='p-1'>150kW/150kVA</td>
              <td className='p-1'>null</td>
              <td className='p-1'>WATT ELECTRICAL/ DISJONCTEUR NDM1-63 C32</td>
              <td className='p-1'>1 Extracteur, 2 Climatiseurs</td>
              <td className='p-1'>En Marche</td>
              <td className='p-1'>RAS</td>
            </tr>
            <tr>
              <td className='p-1'>1</td>
              <td className='p-1'>
                <Row className='px-3'>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i className="bi bi-pencil-square text-primary"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i className="bi bi-trash text-danger"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i class="bi bi-gear-fill"></i>
                    </a>
                  </Col>
                </Row>
              </td>


              <td className='p-1'>Dir</td>
              <td className='p-1'>100</td>
              <td className='p-1'>Adamaoua</td>
              <td className='p-1'>Mbere</td>
              <td className='p-1'>Mbere</td>
              <td className='p-1'>Phase1</td>
              <td className='p-1'>89</td>
              <td className='p-1'>162</td>
              <td className='p-1'>55</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Lithium-ion 460.8V/480Ah</td>
              <td className='p-1'>72</td>
              <td className='p-1'>0</td>
              <td className='p-1'>300</td>
              <td className='p-1'>Pc = 270W, Model = SINGYES solar (Hunan)</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Model: PowerCube5000/ SUN2000-150KTL-S0</td>
              <td className='p-1'>150kW/150kVA</td>
              <td className='p-1'>null</td>
              <td className='p-1'>WATT ELECTRICAL/ DISJONCTEUR NDM1-63 C32</td>
              <td className='p-1'>1 Extracteur, 2 Climatiseurs</td>
              <td className='p-1'>En Marche</td>
              <td className='p-1'>RAS</td>
            </tr>
            <tr>
              <td className='p-1'>2</td>
              <td className='p-1'>
                <Row className='px-3'>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i className="bi bi-pencil-square text-primary"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i className="bi bi-trash text-danger"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i class="bi bi-gear-fill"></i>
                    </a>
                  </Col>
                </Row>
              </td>
              <td className='p-1'>Beka Giuwang</td>
              <td className='p-1'>100</td>
              <td className='p-1'>Adamaoua</td>
              <td className='p-1'>Faro et Deo</td>
              <td className='p-1'>Faro et Deo</td>
              <td className='p-1'>Phase1</td>
              <td className='p-1'>89</td>
              <td className='p-1'>162</td>
              <td className='p-1'>55</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Lithium-ion 460.8V/480Ah</td>
              <td className='p-1'>72</td>
              <td className='p-1'>0</td>
              <td className='p-1'>300</td>
              <td className='p-1'>Pc = 270W, Model = SINGYES solar (Hunan)</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Model: PowerCube5000/ SUN2000-150KTL-S0</td>
              <td className='p-1'>150kW/150kVA</td>
              <td className='p-1'>null</td>
              <td className='p-1'>WATT ELECTRICAL/ DISJONCTEUR NDM1-63 C32</td>
              <td className='p-1'>1 Extracteur, 2 Climatiseurs</td>
              <td className='p-1'>En Marche</td>
              <td className='p-1'>RAS</td>
            </tr>
            <tr>
              <td className='p-1'>1</td>
              <td className='p-1'>
                <Row className='px-3'>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i className="bi bi-pencil-square text-primary"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i className="bi bi-trash text-danger"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i class="bi bi-gear-fill"></i>
                    </a>
                  </Col>
                </Row>
              </td>


              <td className='p-1'>Dir</td>
              <td className='p-1'>100</td>
              <td className='p-1'>Adamaoua</td>
              <td className='p-1'>Mbere</td>
              <td className='p-1'>Mbere</td>
              <td className='p-1'>Phase1</td>
              <td className='p-1'>89</td>
              <td className='p-1'>162</td>
              <td className='p-1'>55</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Lithium-ion 460.8V/480Ah</td>
              <td className='p-1'>72</td>
              <td className='p-1'>0</td>
              <td className='p-1'>300</td>
              <td className='p-1'>Pc = 270W, Model = SINGYES solar (Hunan)</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Model: PowerCube5000/ SUN2000-150KTL-S0</td>
              <td className='p-1'>150kW/150kVA</td>
              <td className='p-1'>null</td>
              <td className='p-1'>WATT ELECTRICAL/ DISJONCTEUR NDM1-63 C32</td>
              <td className='p-1'>1 Extracteur, 2 Climatiseurs</td>
              <td className='p-1'>En Marche</td>
              <td className='p-1'>RAS</td>
            </tr>
            <tr>
              <td className='p-1'>2</td>
              <td className='p-1'>
                <Row className='px-3'>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i className="bi bi-pencil-square text-primary"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i className="bi bi-trash text-danger"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i class="bi bi-gear-fill"></i>
                    </a>
                  </Col>
                </Row>
              </td>
              <td className='p-1'>Beka Giuwang</td>
              <td className='p-1'>100</td>
              <td className='p-1'>Adamaoua</td>
              <td className='p-1'>Faro et Deo</td>
              <td className='p-1'>Faro et Deo</td>
              <td className='p-1'>Phase1</td>
              <td className='p-1'>89</td>
              <td className='p-1'>162</td>
              <td className='p-1'>55</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Lithium-ion 460.8V/480Ah</td>
              <td className='p-1'>72</td>
              <td className='p-1'>0</td>
              <td className='p-1'>300</td>
              <td className='p-1'>Pc = 270W, Model = SINGYES solar (Hunan)</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Model: PowerCube5000/ SUN2000-150KTL-S0</td>
              <td className='p-1'>150kW/150kVA</td>
              <td className='p-1'>null</td>
              <td className='p-1'>WATT ELECTRICAL/ DISJONCTEUR NDM1-63 C32</td>
              <td className='p-1'>1 Extracteur, 2 Climatiseurs</td>
              <td className='p-1'>En Marche</td>
              <td className='p-1'>RAS</td>
            </tr>  <tr>
              <td className='p-1'>1</td>
              <td className='p-1'>
                <Row className='px-3'>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i className="bi bi-pencil-square text-primary"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i className="bi bi-trash text-danger"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i class="bi bi-gear-fill"></i>
                    </a>
                  </Col>
                </Row>
              </td>


              <td className='p-1'>Dir</td>
              <td className='p-1'>100</td>
              <td className='p-1'>Adamaoua</td>
              <td className='p-1'>Mbere</td>
              <td className='p-1'>Mbere</td>
              <td className='p-1'>Phase1</td>
              <td className='p-1'>89</td>
              <td className='p-1'>162</td>
              <td className='p-1'>55</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Lithium-ion 460.8V/480Ah</td>
              <td className='p-1'>72</td>
              <td className='p-1'>0</td>
              <td className='p-1'>300</td>
              <td className='p-1'>Pc = 270W, Model = SINGYES solar (Hunan)</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Model: PowerCube5000/ SUN2000-150KTL-S0</td>
              <td className='p-1'>150kW/150kVA</td>
              <td className='p-1'>null</td>
              <td className='p-1'>WATT ELECTRICAL/ DISJONCTEUR NDM1-63 C32</td>
              <td className='p-1'>1 Extracteur, 2 Climatiseurs</td>
              <td className='p-1'>En Marche</td>
              <td className='p-1'>RAS</td>
            </tr>
            <tr>
              <td className='p-1'>2</td>
              <td className='p-1'>
                <Row className='px-3'>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i className="bi bi-pencil-square text-primary"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i className="bi bi-trash text-danger"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i class="bi bi-gear-fill"></i>
                    </a>
                  </Col>
                </Row>
              </td>
              <td className='p-1'>Beka Giuwang</td>
              <td className='p-1'>100</td>
              <td className='p-1'>Adamaoua</td>
              <td className='p-1'>Faro et Deo</td>
              <td className='p-1'>Faro et Deo</td>
              <td className='p-1'>Phase1</td>
              <td className='p-1'>89</td>
              <td className='p-1'>162</td>
              <td className='p-1'>55</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Lithium-ion 460.8V/480Ah</td>
              <td className='p-1'>72</td>
              <td className='p-1'>0</td>
              <td className='p-1'>300</td>
              <td className='p-1'>Pc = 270W, Model = SINGYES solar (Hunan)</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Model: PowerCube5000/ SUN2000-150KTL-S0</td>
              <td className='p-1'>150kW/150kVA</td>
              <td className='p-1'>null</td>
              <td className='p-1'>WATT ELECTRICAL/ DISJONCTEUR NDM1-63 C32</td>
              <td className='p-1'>1 Extracteur, 2 Climatiseurs</td>
              <td className='p-1'>En Marche</td>
              <td className='p-1'>RAS</td>
            </tr>
            <tr>
              <td className='p-1'>1</td>
              <td className='p-1'>
                <Row className='px-3'>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i className="bi bi-pencil-square text-primary"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i className="bi bi-trash text-danger"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i class="bi bi-gear-fill"></i>
                    </a>
                  </Col>
                </Row>
              </td>


              <td className='p-1'>Dir</td>
              <td className='p-1'>100</td>
              <td className='p-1'>Adamaoua</td>
              <td className='p-1'>Mbere</td>
              <td className='p-1'>Mbere</td>
              <td className='p-1'>Phase1</td>
              <td className='p-1'>89</td>
              <td className='p-1'>162</td>
              <td className='p-1'>55</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Lithium-ion 460.8V/480Ah</td>
              <td className='p-1'>72</td>
              <td className='p-1'>0</td>
              <td className='p-1'>300</td>
              <td className='p-1'>Pc = 270W, Model = SINGYES solar (Hunan)</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Model: PowerCube5000/ SUN2000-150KTL-S0</td>
              <td className='p-1'>150kW/150kVA</td>
              <td className='p-1'>null</td>
              <td className='p-1'>WATT ELECTRICAL/ DISJONCTEUR NDM1-63 C32</td>
              <td className='p-1'>1 Extracteur, 2 Climatiseurs</td>
              <td className='p-1'>En Marche</td>
              <td className='p-1'>RAS</td>
            </tr>
            <tr>
              <td className='p-1'>2</td>
              <td className='p-1'>
                <Row className='px-3'>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i className="bi bi-pencil-square text-primary"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i className="bi bi-trash text-danger"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="/" className="list-group-item border-0">
                      <i class="bi bi-gear-fill"></i>
                    </a>
                  </Col>
                </Row>
              </td>
              <td className='p-1'>Beka Giuwang</td>
              <td className='p-1'>100</td>
              <td className='p-1'>Adamaoua</td>
              <td className='p-1'>Faro et Deo</td>
              <td className='p-1'>Faro et Deo</td>
              <td className='p-1'>Phase1</td>
              <td className='p-1'>89</td>
              <td className='p-1'>162</td>
              <td className='p-1'>55</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Lithium-ion 460.8V/480Ah</td>
              <td className='p-1'>72</td>
              <td className='p-1'>0</td>
              <td className='p-1'>300</td>
              <td className='p-1'>Pc = 270W, Model = SINGYES solar (Hunan)</td>
              <td className='p-1'>null</td>
              <td className='p-1'>Model: PowerCube5000/ SUN2000-150KTL-S0</td>
              <td className='p-1'>150kW/150kVA</td>
              <td className='p-1'>null</td>
              <td className='p-1'>WATT ELECTRICAL/ DISJONCTEUR NDM1-63 C32</td>
              <td className='p-1'>1 Extracteur, 2 Climatiseurs</td>
              <td className='p-1'>En Marche</td>
              <td className='p-1'>RAS</td>
            </tr> */}
          </tbody>
        </Table>
        </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Statistics;