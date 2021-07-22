
const ResidentInfo = ( { name, status, origin, img } ) => {
    return (
        <div>
             {name}
            {status}
            <img src={img} alt={name} />
            {origin}
        </div>
    )
}

export default ResidentInfo;