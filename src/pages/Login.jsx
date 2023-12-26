import React, { useEffect, useState } from 'react'
import styles from "./style/Login.module.css";
import { useSelector, useDispatch } from "react-redux"
import { validateForm } from '../util/auth'
import pass from "../data/pass.json"
import { login } from "../redux/features/auth-slice";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const checkValue = (data) => {
        const error = validateForm(data);
        if (Object.keys(error).length == 0) {
            return true;
        } else {
            setErrors(error);
            return false;
        }
    }

    const handleLogin = (e) => {
        try {
            e.preventDefault();
            const form = new FormData(e.target);
            const data = {
                email: form.get("email"),
                password: form.get("password")
            }
            const isCheckValue = checkValue(data);

            if (!isCheckValue) {
                console.log(errors);
            } else {
                if (pass.email == data.email) {
                    if (pass.password == data.password) {
                        dispatch(login());
                        navigate("/");
                    } else {
                        alert("wrong password")
                    }
                } else {
                    alert("wrong email")
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

    }, [errors])

    return (
        <div className={styles.containerForm}>
            <form onSubmit={handleLogin} className={styles.formLogin}>
                <img src="https://cdn-icons-png.flaticon.com/128/13125/13125510.png?uid=R100488832&ga=GA1.1.1538859696.1700853912&semt=ais" alt="" />
                <div className={styles.formContent}>
                    <div className={styles.formGroup}>
                        <div className={styles.formGroupInput}>
                            <label htmlFor="email">Email</label>
                            <input placeholder='Your Email' name='email' type="text" />
                        </div>
                        <div className={styles.formGroupError}>
                            <label htmlFor=""></label>
                            <span className={styles.error}>{errors.email}</span>
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <div className={styles.formGroupInput}>
                            <label htmlFor="password">Password</label>
                            <input placeholder='Your Password' name='password' type="password" />
                        </div>
                        <div className={styles.formGroupError}>
                            <label htmlFor=""></label>
                            <span className={styles.error}>{errors.password}</span>
                        </div>
                    </div>
                </div>
                <button className={styles.btn__login} type='submit'>Log In</button>
            </form>
        </div>
    )
}

export default Login