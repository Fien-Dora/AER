
import '../../assets/Styles/Statistics.css';
import '../../index.css'
import search from '../..//assets/img/search.png';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from "react-router-dom"
// import datas from "../../data/zones/zone1"
import { useEffect, useState } from 'react';



function Statistics() {
  const [zones, setZones] = useState(null);

  useEffect(() => {
    // async
    fetch ('http://localhost:8000/zone1')
      .then(res =>{
        // async
        return res.json();
      })
      .then((data) => {
        console.log (data);
        setZones(data)
      })
  }, [])
  return (
    <>
    
    </>
  );
}

export default Statistics;