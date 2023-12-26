import React from 'react'
import data from "../data/index.json"
import GridCard from '../components/GridCard'
const Home = () => {
  console.log(data) 
  return (
    <div>
      <GridCard data={data}/>
    </div>
  )
}

export default Home