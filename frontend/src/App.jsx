
//import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar.jsx";
import {HashRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import VehiclePage from "./pages/VehiclePage.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ProfilePage from "./pages/ProfilePage.jsx";
import {useEffect, useState} from "react";


function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("utilizator");
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);
            } catch (error) {
                console.error("Error parsing user data:", error);
            }
        }
    }, []);

    return (
        <HashRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Navigate to={"/home"}/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/masini" element={<VehiclePage/>}/>
                <Route path="/profile" element={<ProfilePage user={user}/>}/>
                {/*<Route path="about" element={<About />} />*/}
                {/*<Route path="models" element={<Models />} />*/}
                {/*<Route path="testimonials" element={<TestimonialsPage />} />*/}
                {/*<Route path="team" element={<Team />} />*/}
                {/*<Route path="contact" element={<Contact />} />*/}
            </Routes>
        </HashRouter>
    );
}

export default App;
