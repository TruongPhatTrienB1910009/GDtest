import React, { useState } from 'react'
import data from "../data/index.json"
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
          <GridCard data={data}/>
        ) : (
          <ListCard data={data} />
        )
      }
    </div>
  )
}

export default Home