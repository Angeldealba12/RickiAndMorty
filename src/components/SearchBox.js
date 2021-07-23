import { useState, useEffect } from 'react'
import LocationContainer from './LocationContainer';

const SearchBox = () => {

    const [data, setData] = useState([])
    const [search, setSearch] = useState('');
    const [onClick, setOnClick] = useState('');

    useEffect(() => {

        const mainData = [];

        const myFunc = async () => {
            const res1 = await fetch('https://rickandmortyapi.com/api/location')
                .then((Response) => Response.json())
            const data1 = res1.results;

            const res2 = await fetch('https://rickandmortyapi.com/api/location?page=2')
                .then((Response) => Response.json())
            const data2 = res2.results;

            const res3 = await fetch('https://rickandmortyapi.com/api/location?page=3')
                .then((Response) => Response.json())
            const data3 = res3.results;

            const res4 = await fetch('https://rickandmortyapi.com/api/location?page=4')
                .then((Response) => Response.json())
            const data4 = res4.results;

            const res5 = await fetch('https://rickandmortyapi.com/api/location?page=5')
                .then((Response) => Response.json())
            const data5 = res5.results;

            const res6 = await fetch('https://rickandmortyapi.com/api/location?page=6')
                .then((Response) => Response.json())
            const data6 = res6.results;

            data1.forEach(element => {
                return mainData.push(element)
            });

            data2.forEach(element => {
                return mainData.push(element)
            })

            data3.forEach(element => {
                return mainData.push(element)
            })

            data4.forEach(element => {
                return mainData.push(element)
            })

            data5.forEach(element => {
                return mainData.push(element)
            })

            data6.forEach(element => {
                return mainData.push(element)
            })

            setData(mainData)

        }

        myFunc()
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