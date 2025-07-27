
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
