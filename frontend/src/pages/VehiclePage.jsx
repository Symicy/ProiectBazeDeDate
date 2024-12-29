import VehicleList from "../components/VehicleList.jsx";
import ModalAddVehicle from "../components/ModalAddVehicle.jsx";
import {useEffect, useState} from "react";
import {getVehicles} from "../api/VehicleService.jsx";

function VehiclePage() {

    const [user, setUser] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [data, setData] = useState({});

    const getallVehicles = async (page=0, size=10) => {
        try{
            setCurrentPage(page);
            const {data} = await getVehicles(page, size);
            setData(data);
            console.log(data);
        } catch (error) {
            console.error("Eroare obtinere masini",error);
        }
    };

    useEffect(() => {
        getallVehicles();
    }, []);

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
        <div className="container mt-4">
            {user && user.tip === "admin" && (
                <>
                    <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal"
                            data-bs-target="#addVehicleStaticBackdrop">
                        Adaugare masina
                    </button>
                    <ModalAddVehicle getAllVehicles={getallVehicles}/>
                </>
            )}
            <div className="d-flex mt-4">
                <VehicleList data={data} user={user} currentPage={currentPage} getAllVehicles={getallVehicles}/>
            </div>
        </div>
    );
}

export default VehiclePage;