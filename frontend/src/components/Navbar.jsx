import logo from '../images/logo/rent-a-car-svgrepo-com.svg';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Navbar(){
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("utilizator");
        console.log("Stored user data:", storedUser);
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);
            } catch (error) {
                console.error("Error parsing user data:", error);
            }
        }
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        setUser(null);
        window.location.href = "/";
    }
    return(
        <>
            <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container">
                    <a className="navbar-brand" href="#"></a>
                        <img src={logo} alt="logo" width="100" height="60"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/masini" className="nav-link active">Masini</Link>
                                {/*<a className="nav-link active" href="#">Vehicule</a>*/}
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Despre</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        {user ? (
                            <div className="dropdown">
                                <button type="button" className="btn btn-primary dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false" data-bs-auto-close="outside">
                                    {user.nume}
                                </button>
                                <div className="dropdown-menu dropdown-menu-end" style={{minWidth: "300px"}}>
                                    <Link className="dropdown-item" to="/profile">Profil</Link>
                                    <button className="dropdown-item" onClick={handleLogout}>Deconectare</button>
                                </div>
                            </div>
                        ) : (
                            <form className="d-flex">
                                <Link to="/login" className="btn btn-dark me-2">Logare</Link>
                                <Link to="/register" className="btn btn-danger">Inregistrare</Link>
                            </form>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;