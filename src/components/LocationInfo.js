const LocationInfo = ( {name, type, dimension} ) => {
    return (
        <div className="locationInfo">
            <p>{name}</p>
            <p>{type}</p>
            <p>{dimension}</p>
        </div>
    )
} 

export default LocationInfo;

