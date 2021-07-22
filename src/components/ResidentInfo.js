
const ResidentInfo = ( { name, status, origin, img } ) => {
    return (
        <div className="resident-info">
             <p>{name}</p>
            <p>{status}</p>
            <img src={img} alt={name} />
            <p>{origin}</p>
        </div>
    )
}

export default ResidentInfo;