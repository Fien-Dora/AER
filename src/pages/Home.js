import Summary from "../components/summary.js";
import Statistics from "../components/sites/Statistics.js";


const Home = () => {
  return ( 
    <>
      <div className="container-fluid min-vh-100 background: #F0F2F5 ">
        <div className="row">
          <div className="col-2 g-0 ">
          </div>
          <div className="col-10 p-0 m-0 g-0 right">
            <Summary/>

            <Statistics/>
          </div>
        </div>
      </div>
    </>
   );
}
 
export default Home;