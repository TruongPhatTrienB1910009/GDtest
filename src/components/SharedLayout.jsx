import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import styles from "./style/SharedLayout.module.css";
const SharedLayout = () => {
    return (
        <div>
            <NavBar />
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    );
};
export default SharedLayout;
