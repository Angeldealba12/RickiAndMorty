import { useState, useEffect } from 'react'
import LocationContainer from './LocationContainer';

const SearchBox = () => {

    const [data, setData] = useState([])
    const [search, setSearch] = useState('');
    const [onClick, setOnClick] = useState('');

    useEffect(() => {

        const myArrayData = [];

        const myAPis = [
            'https://rickandmortyapi.com/api/location',
            'https://rickandmortyapi.com/api/location?page=2',
            'https://rickandmortyapi.com/api/location?page=3',
            'https://rickandmortyapi.com/api/location?page=4',
            'https://rickandmortyapi.com/api/location?page=5',
            'https://rickandmortyapi.com/api/location?page=6'
        ]

        myAPis.forEach((element) => {
            const myFunc = async () => {
                const res = await fetch(element)
                    .then((response) => response.json())


                const myData = res.results

                myData.forEach((e) => {
                    return myArrayData.push(e)
                })
                setData(myArrayData)
            }
            myFunc()
        })

    }, [])

    

    return (
        <div className="search-box">
            <div className="logo"></div>
            <div className="search-inputs">
                <input className="input" value={search} type="text" placeholder="Search.." onChange={(e) => {
                    setSearch(e.target.value);
                }} />
                {search.length !== 0 && (
                    <div className="dataResult">
                        {data.filter((value) => {
                            if (search === "") {
                                return value
                            } else if (value.name.toLowerCase().includes(search.toLowerCase())) {
                                return value
                            } else {
                                return null
                            }
                        }).map((val, key) => {
                            return <div onClick={() => {
                                setOnClick(val.id)
                            }} className="dataItem" key={key}>
                                <p>{val.name}</p>
                            </div>
                        })}
                    </div>
                )}
            </div>
            <div className="second-container">
                <LocationContainer id={onClick} />
            </div>

        </div>
    )
}

export default SearchBox;