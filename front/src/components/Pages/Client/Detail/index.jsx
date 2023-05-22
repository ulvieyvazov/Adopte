import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {


    const params = useParams()

    const [category , setCategory] = useState([])
    const getCata = async()=>{
        const res = await axios.get(`http://localhost:6060/childs/name/${params.name}`)
        setCategory(res.data[0])
        console.log(res.data[0]);
    }

    

    useEffect(()=>{
        getCata()
    },[])

    // console.log(category.name);

  return (
    <div>
        <img src={category?.img} alt="" />
        <h1>{category?.name}</h1>
        <p>{category?.setCategory}</p>
    </div>
  )
}

export default Detail