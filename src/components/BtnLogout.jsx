import React from 'react'
import styles from "./style/Btn.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { logout } from '../redux/features/auth-slice'
import { useDispatch } from "react-redux"

const BtnLogout = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <button onClick={handleLogout} className={`${styles.btnLogout} ${styles.btn}`}><FontAwesomeIcon icon={faRightFromBracket} /> Log out</button>
  )
}

export default BtnLogout