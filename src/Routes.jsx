import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/portfolio" Component={Portfolio} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;