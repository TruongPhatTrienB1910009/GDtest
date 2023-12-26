import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import SharedLayout from './components/SharedLayout'
import Add from "./pages/Add"
import Edit from "./pages/Edit"
import Error from './pages/Error'
import Login from "./pages/Login"
import Home from "./pages/Home"
import { useEffect, useState } from "react"
import ProtectedRoute from "./components/ProtectedRoute"
import { useSelector, useDispatch } from "react-redux"


function App() {
  const isLogin = useSelector((state) => state.auth.login);

  useEffect(() => {
    console.log("isLogin", isLogin);
  }, [isLogin]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route element={<ProtectedRoute isLogin={isLogin} />} >
            <Route index element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
