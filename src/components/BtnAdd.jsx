import React from 'react'
import styles from "./style/Btn.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const BtnAdd = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => {navigate("/add")}} className={`${styles.btnAdd} ${styles.btn}`}><FontAwesomeIcon icon={faPlus}/> ADD</button>
    </>
  )
}

export default BtnAdd