import { Outlet } from 'react-router-dom';
import BtnLogout from "./BtnLogout.jsx";
import BtnAdd from "./BtnAdd.jsx";

const ProtectedRoute = () => {

    return (
        <div style={{padding: '0 4px'}}>
            <BtnAdd />
            <BtnLogout />
            <Outlet />
        </div>
    )
}

export default ProtectedRoute