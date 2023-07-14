import NavigationBar from "..//components/NavigationBar.js";
import Sidebar from "../components/Sidebar.js";
import MaintainCard from "../components/MaintainCard.js";

const Category = () => {
  return ( 
    <>
      <div className="container-fluid min-vh-100 background: #F0F2F5 ">
        <div className="row">
          <div className="col-2 g-0 ">
            <Sidebar />
          </div>
          <div className="col-10 p-0 m-0 g-0 right">
            <NavigationBar/>

            <MaintainCard/>
          </div>
        </div>
      </div>
    </>
   );
}
 
export default Category;