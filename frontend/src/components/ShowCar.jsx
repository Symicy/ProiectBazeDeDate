import { Link } from "react-router-dom";
import ShowCarImage from "../images/cars/homePageCar.png";
import { useEffect, useState } from "react";
import "../styles.css";
function ShowCar() {

    return (
        <>
            <div className="container vh-100  d-flex justify-content-center align-items-center">
                <div className="row">
                <div className="col">
                    <h4>Planifică-ți vacanța acum</h4>
                    <h1>
                        Cele mai bune mașini de închiriat
                    </h1>
                    <p>
                        Închiriază o mașină de la noi și bucură-te de o călătorie fără griji
                    </p>
                    <button className={"btn btn-primary ms-2 me-2 btn-lg"}>Închiriere</button>
                    <Link to="/masini" className="btn btn-secondary btn-lg">Masini</Link>
                </div>
                {/* img */}
                    <div className="col">
                    <img
                        src={ShowCarImage}
                        alt="car-img"
                    />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShowCar;