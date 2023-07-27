import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '..//assets/Styles/card.css';
import '../data/category/category.json';
import images from "../utils/images";
   


const MaintainCard = ({ categories }) => {
     //Render a load of fallback UI when Maintaining code later in future
  // if (!categories){
  //   return (
  //     <h2>Category data not found</h2>
  //   );
  // }
  
  return (
    <>
    <div className="category my-4 mx-4">
      <Row>
        {categories.map((category => (
        <Col key={category.id} xxl={2} xl={3} lg={4} md={6} sm={6} className="align-items-center">
          <Card style={{ width: "13rem" }} className="p-0 mx-0 my-2 custom-card">
            <Card.Img variant="top" src={images[category.image]} style={{ height: "6rem" }} />
            <Card.Body className="py-1 category-card">
              <Card.Title className="p-0 m-0">{category.name}</Card.Title>
              <Card.Text className="p-0 m-0">
                {category.description}
              </Card.Text>

              <Link
                to="/Maintain"
                className="list-group-item border-0 text-success py-1"
              >
                <i className="bi bi-gear-fill pe-1"></i> Maintain
              </Link>
            </Card.Body>
          </Card>
        </Col> 
        )))}
      </Row>

    </div>
    </>
  );
};

export default MaintainCard;
     