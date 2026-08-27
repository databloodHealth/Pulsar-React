import {Route, Routes} from "react-router-dom";
import Home from "@/pages/Landing/home";
import Cadastro from "@/pages/Auth/Cadastro";
import Login from "@/pages/Auth/Login";


function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default AppRoutes;