import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";

const AppRouters = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Layout><HomePage/></Layout>} />
            <Route path="/user-profile" element={<span>Users Profile page</span>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRouters