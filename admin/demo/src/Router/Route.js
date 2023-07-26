import { Routes, Route } from "react-router-dom";
import ProductAdminPage from "../Components/ProductAdminPage";
import CustomerType2AdminPage from "../Components/CustomerType2AdminPage";
import CustomerAdminPage from "../Components/CustomerAdminPage";
import Error from "../Components/Error";
import Dashboard from "../Components/Dashboard";
import News from "../Components/News";
import Revenue from "../Components/Revenue";
import Statics from './../Components/Statics';
import Logout from './../Components/Logout';
import Message from "../Components/Message";



export let routes2 = (
    <Routes>

        <Route path="/" element={<Dashboard/>} />
        <Route path="/home" element={<ProductAdminPage/>} />
        <Route path="/customerType1" element={<CustomerAdminPage/>} />
        <Route path="/customerType2" element={<CustomerType2AdminPage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />

        {/* to do list */}
        <Route path="/news" element={<News/>} />
        <Route path="/revenue" element={<Revenue/>} />
        <Route path="/statics" element={<Statics/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/message" element={<Message/>} />

        <Route path="*" element={<Error/>} />
        
    </Routes>
);



