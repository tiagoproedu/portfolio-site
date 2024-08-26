import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;