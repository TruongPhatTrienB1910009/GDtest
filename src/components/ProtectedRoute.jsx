import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import BtnLogout from "./BtnLogout.jsx";
import BtnAdd from "./BtnAdd.jsx";

const ProtectedRoute = ({ isLogin }) => {
    if (!isLogin) {
        return <Navigate to='/login' />;
    }

    return (
        <div>
            <BtnAdd />
            <BtnLogout />
            <Outlet />
        </div>
    )
}

export default ProtectedRoute