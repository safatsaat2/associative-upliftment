import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Strategy = () => {

    const [data, setData] = useState([])

    const {name} = useParams()

    useEffect(() => {
        fetch("/public/strategy.json")
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            const filterData = data.filter(dta => dta.params === name)
            setData(filterData)
        })
    }, [])

    console.log(data)


    return (
        <>
            <h1 className='text-center text-4xl font-extrabold text-gray-800 mt-16'>Testing {name}</h1>
        </>
    );
};

export default Strategy;