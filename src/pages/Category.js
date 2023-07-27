import MaintainCard from "../components/testCategory.js";
import useFetch from "../hooks/useFetch.js";
const Category = () => {
  const {data: categories, isLoading, error } = useFetch("http://localhost:8005/categories");
  return ( 
    <>
      <div className="container-fluid min-vh-100 background: #F0F2F5 ">
        <div className="row">
          <div className="col-2 g-0 ">
          </div>
          <div className="col-10 p-0 m-0 g-0 right">
            {isLoading && <p className="text-primary text-center">Loading...</p>}
            {error && <p className="text-primary text-center">{error}</p>}
            {categories && <MaintainCard categories={categories} />}
          </div>
        </div>
      </div>
    </>
   );
}

export default Category;