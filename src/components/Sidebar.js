import { Outlet } from 'react-router-dom';
import '..//assets/Styles/Sidebar.css'
import search from '../assets/img/search.png'

const Sidebar = () => {
  return ( 
    <>
      <div className="bg-white sidebar p-2 m-0">
      <div className="row g-0 m-0 p-1 justify-content-center">
        <div className="col-4 ">
          <img src="/logo.jpg" alt="logoFromPublic" 
          className='siderLogo'/>
        </div>
        <div className="col-8">
          <span 
            className="brand-name fs-5">
            <strong>
              <span className="text-success">A</span>
              <span className="text-danger">E</span>
              <span className="text-warning">R</span> 
            </strong> Data
            <div className='fs-6'>  Management</div>
          </span>
        </div>
      </div>

      <div className="px-2">
        <div className="search-box search my-4" id="js-search">
          <img src={search} alt="searchIcon" />
          <input type="text" className='search' placeholder='search' />
        </div>
      </div>

      <div className="fs-6 text-secondary ps-3">
        Sites and Activities
      </div>

      <div className="list-group list-group-flush">
        <a href="/" className="list-group-item py-1 border-0">
          <i className="bi bi-speedometer2 fs-6 me-2 text-success"></i>
          <span className="fs-5">Dashboard</span>
        </a>
        <a href="/" className="list-group-item py-1 border-0">
          <i className="bi bi-house-door fs-6 me-2"></i>
          <span className="fs-6">Zone 1</span>
        </a>
        <a href="/" className="list-group-item py-1 border-0">
          <i className="bi bi-house-door fs-6 me-2"></i>
          <span className="fs-6"> Zone 2</span>
        </a>
        <a href="/" className="list-group-item py-1 border-0">
          <i className="bi bi-house-door fs-6 me-2"></i>
          <span className="fs-6"> Zone 3</span>
        </a>
        <a href="/" className="list-group-item py-1 border-0">
          <i className="bi bi-house-door fs-6 me-2"></i>
          <span className="fs-6"> Zone 4</span>
        </a>
        <a href="/" className="list-group-item py-1 border-0">
          <i className="bi bi-house-door fs-6 me-2"></i>
          <span className="fs-6"> Zone 5</span>
        </a>
      </div>
    </div>
    <Outlet />
    </>
   );
}
 
export default Sidebar;