import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const ActionField = () => {
  return (
    <>
      <Row className="px-3">
        {/* Edit */}
        <Col>
          <a href="#" className="list-group-item border-0">
            <i className="bi bi-pencil-square text-success mx-2"></i>
          </a>
        </Col>
        {/* Delete */}
        <Col>
          <a href="#" className="list-group-item border-0">
            <i className="bi bi-trash text-danger"></i>
          </a>
        </Col>
        {/* Maintainace */}
        <Col>
          <Link to="/Category" className="list-group-item border-0">
            <i className="bi bi-gear-fill"></i>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default ActionField;
