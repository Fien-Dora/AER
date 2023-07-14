import NavigationBar from "../components/NavigationBar.js";
import Summary from "../components/summary.js";
import Statistics from "../components/Statistics.js";
import Sidebar from "../components/Sidebar.js";


const Home = () => {
  return ( 
    <>
      <div className="container-fluid min-vh-100 background: #F0F2F5 ">
        <div className="row">
          <div className="col-2 g-0 ">
            <Sidebar />
          </div>
          <div className="col-10 p-0 m-0 g-0 right">
            <NavigationBar/>

            <Summary/>

            <Statistics/>
          </div>
        </div>
      </div>
    </>
   );
}
 
export default Home;