import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Carreira from "./components/Carreira";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/carreira" Component={Carreira} />
                <Route path="/portfolio" Component={Portfolio} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;