
const ResidentInfo = ({ name, status, origin, img }) => {
    return (
        <div style={{ backgroundImage: `url(${img})` }} className="resident-info">
            <p>{name}</p>
            <p>{status}</p>
            <p>{origin}</p>
        </div>
    )
}

export default ResidentInfo;