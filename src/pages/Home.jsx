import React, { useEffect, useState } from 'react'
import GridCard from '../components/GridCard'
import BtnSwitch from '../components/BtnSwitch'
import ListCard from '../components/ListCard'
const Home = () => {
  const [type, setType] = useState(0);
  const [data, setData] = useState([]);

  const handleGetProducts = async () => {
    try {
      const res = await fetch(
        "https://mock-flzy.onrender.com/products",
        {
          method: 'GET',
        }
      )
      const result = await res.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleGetProducts();
  }, [data.length])

  return (
    <div>
      {
        (data.length > 0) ? (
          <>
            <BtnSwitch type={type} setType={setType} />
            {
              (type == 0) ? (
                <GridCard handleGetProducts={handleGetProducts} data={data} />
              ) : (
                <ListCard handleGetProducts={handleGetProducts} data={data} />
              ) 
            }
          </>
        ) : ('')
      }
    </div>
  )
}

export default Home