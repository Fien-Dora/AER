import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const ZonesPage = () => {
const { id } = useParams();
console.log('id =>', id);

const {data: zone, isLoading, error } = useFetch(`http://localhost:8000/zones/${id}`);
console.log('Zone =>', zone);
    return ( 
        <div className="m-5">
            <h2>Zones</h2>
            {isLoading && <p className="text-primary text-center">Loading...</p>}
            {error && <p className="text-primary text-center">{error}</p>}
            <div className="d-flex flex-wrap">
            {zone && 
                zone.data.map((zoneData) => (
                    <div className="bg-light shadow p-3 m-3" style={{width: '300px'}}>
                        <p className='fs-3'>Id : {zoneData.id}</p>
                        <p>Arrondissement : {zoneData.Arrondissement}</p>
                        <p>Capacité : {zoneData.Capacité}</p>
                        <p>Département : {zoneData.Département}</p>
                        <p>Nomdusite : {zoneData.Nomdusite}</p>
                        <p>Phase : {zoneData.Phase}</p>
                        <p>Responsible : {zoneData.Responsible}</p>
                        <p>Région : {zoneData.Région}</p>
                        <p>Zone : {zoneData.Zone}</p>
                    </div>
                ))
            }
            </div>
        </div>
     );
}
 
export default ZonesPage;