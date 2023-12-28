import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import styles from "./style/SharedLayout.module.css";
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { login, logout } from "../redux/features/auth-slice";
import { useEffect, useState } from "react"
import { Toaster, resolveValue } from 'react-hot-toast';
const SharedLayout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLogin = useSelector((state) => state.auth.login);

    const autoLogin = () => {
        if (localStorage.getItem('isLogin')) {
            if (!isLogin) {
                dispatch(login());
            }
        } else {
            dispatch(logout());
            navigate("/login");
        }
    }

    useEffect(() => {
        autoLogin();
    }, [isLogin]);

    return (
        <div>
            <Toaster position="top-right"/>
            <NavBar />
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    );
};
export default SharedLayout;
