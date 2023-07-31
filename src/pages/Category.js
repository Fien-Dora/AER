import MaintainCard from "../components/testCategory.js";
import useFetch from "../hooks/useFetch.js";
const Category = () => {
  const {
    data: categories,
    isLoading,
    error,
  } = useFetch("http://localhost:8006/categories");
  return (
    <>
      <div>
        {isLoading && <p className="text-primary text-center">Loading...</p>}
        {error && <p className="text-primary text-center">{error}</p>}
        {categories && <MaintainCard categories={categories} />}
      </div>
    </>
  );
};

export default Category;
