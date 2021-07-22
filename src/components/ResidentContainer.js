import { useEffect, useState } from 'react'
import ResidentInfo from './ResidentInfo';

const ResidentContainer = ({ url }) => {

    const [name, setName] = useState('')
    const [status, setStatus] = useState('')
    const [origin, setOrigin] = useState('')
    const [img, setImg] = useState('')

    useEffect(() => {

        const logic = async () => {
            const res = await fetch(url).then(response => response.json());
            setName(res.name);
            setStatus(res.status);
            setOrigin(res.origin.name);
            setImg(res.image);
        }

        logic();
    }, [url])

    return (
        <div>
            <ResidentInfo name={name} status={status} img={img} origin={origin} />
        </div>
    )
}


export default ResidentContainer;