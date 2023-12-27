import React, { useEffect, useState } from 'react'
import styles from "./style/Login.module.css";
import { useSelector, useDispatch } from "react-redux"
import { validateForm } from '../util/auth'
import { login } from "../redux/features/auth-slice";
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';

const Login = () => {
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("phattrientruong15062001@gmail.com");
    const [password, setPassword] = useState("12345");

    const handleChangeEmail = (e) => {
        try {
            setEmail(e.target.value);
        } catch (error) {
            console.log(error);
        }
    }

    const handleChangePassword = (e) => {
        try {
            setPassword(e.target.value);
        } catch (error) {
            console.log(error);
        }
    }


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
                if (data.email == "phattrientruong15062001@gmail.com") {
                    if (data.password == "12345") {
                        dispatch(login());
                        localStorage.setItem("isLogin", true);
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
                            <input onChange={handleChangeEmail} value={email} placeholder='Your Email' name='email' type="text" />
                        </div>
                        <div className={styles.formGroupError}>
                            <label htmlFor=""></label>
                            <span className={styles.error}>{errors.email}</span>
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <div className={styles.formGroupInput}>
                            <label htmlFor="password">Password</label>
                            <input onChange={handleChangePassword} value={password} placeholder='Your Password' name='password' type="password" />
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