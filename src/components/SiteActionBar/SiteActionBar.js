import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import search from '../../assets/img/search.png'
// import '../../assets/Styles/Statistic.css';

const SiteActionBar = () => {
  return (
    <>
      <Row className="mx-2 responsiveTable">
        <Col lg="3">
          <div className="site-search" id="js-search">
            <img src={search} alt="searchIcon" />
            <input type="text" className="search" placeholder="search site" />
          </div>
        </Col>

        <Col lg="2">
          <Form.Select aria-label="Default select example" className="sort-by">
            <option>
              Sortby
            </option>
            <option value="name">name</option>
            <option value="capacity">capacity</option>
          </Form.Select>
        </Col>

        <Col lg="4" className="px-1"></Col>
        <Col>
          <a href="/" className="list-group-item border-0">
            <div className="text-success new-site p-1">
              <i className="bi bi-pencil-square text-success mx-2"></i>Create
              New Site
            </div>
          </a>
        </Col>
      </Row>
    </>
  );
};

export default SiteActionBar;
