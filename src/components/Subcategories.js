import { NavLink, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Subcategories = ({ onSelectSubcategory }) => {
  const { id } = useParams();
  console.log("id=>", id);

  const {
    data: categories,
    isLoading,
    error,
  } = useFetch(`http://localhost:8006/categories/${id}`);
  console.log("categories=>", categories);
  return (
    <>
      <div className="bg-light shadow p-2 m-1">
        <h6>Task Type:</h6>
        {isLoading && <p className="text-primary text-center">Loading...</p>}
        {error && <p className="text-primary text-center">{error}</p>}

        {categories &&
          categories.subcategories.map((subcategory) => (
            <NavLink
              key={subcategory.id}
              to={`/category/${id}`} 
              className="list-group-item py-1 border-0 sideBar-link"
              onClick={() => onSelectSubcategory(subcategory.id)}
            >
              <i className="bi bi-gear-fill fs-6 me-2"></i>
              <span className="fs-6">{subcategory.name}</span>
            </NavLink>
          ))}
      </div>
    </>
  );
};

export default Subcategories;
