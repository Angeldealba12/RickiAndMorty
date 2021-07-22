import { useEffect, useState } from 'react'
import LocationInfo from './LocationInfo';
import ResidentContainer from './ResidentContainer';


const LocationContainer = ({ id }) => {

    const [locationInfo, setLocationInfo] = useState(null);
    const [residentUrl, setResidentUrl] = useState([])
    const [idRandom] = useState(Math.floor(Math.random()*20));
    const [locationNo, setLocationNo] = useState("")

    useEffect(() => {

        if (id) {

            const logic = async () => {
                const res = await fetch(`https://rickandmortyapi.com/api/location/${encodeURI(id)}`)
                    .then(response => response.json());

                  
                setLocationInfo(res)
                setResidentUrl(res.residents)
                
            }
            
            logic();
        }else if(idRandom){
            const logic = async () => {
                const res = await fetch(`https://rickandmortyapi.com/api/location/${encodeURI(idRandom)}`)
                    .then(response => response.json());

                  
                setLocationInfo(res)
                setResidentUrl(res.residents)
                
                
            }
            logic()
        }

    }, [id, idRandom])


    const list = residentUrl.slice(0, 10).map((value) => <ResidentContainer url={value} key={value} />)


    return (
        <div className="location">
            {locationInfo && <LocationInfo name={locationInfo.name} type={locationInfo.type} dimension={locationInfo.dimension} />}
            <div className="resident-container">
                {list}
                {locationNo}
            </div>
        </div>
    );
}

export default LocationContainer;
