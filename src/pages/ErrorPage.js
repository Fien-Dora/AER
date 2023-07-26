import { Link } from "react-router-dom";

const ErrorPage = () => {
    return ( 
        <div>
            <h1>Error Page</h1>
            <p className="text-center text-error">An Errror Occured</p>
            <Link to='/' className="btn btn-primary">Go To Home</Link>
        </div>
     );
}
 
export default ErrorPage;