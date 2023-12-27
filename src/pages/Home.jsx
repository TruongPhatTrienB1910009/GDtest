import React, { useState } from 'react'
import data from "../../db.json"
import GridCard from '../components/GridCard'
import BtnSwitch from '../components/BtnSwitch'
import ListCard from '../components/ListCard'
const Home = () => {
  console.log(data) 
  const [type, setType] = useState(0);
  return (
    <div>
      <BtnSwitch type={type} setType={setType} />
      {
        (type == 0) ? (
          <GridCard data={data.products}/>
        ) : (
          <ListCard data={data.products} />
        )
      }
    </div>
  )
}

export default Home