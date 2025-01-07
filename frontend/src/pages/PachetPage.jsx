import React, { useState, useEffect } from "react";
import { getPacheteServicii } from "../api/PacheteServiciiService.jsx";
import ModalAddPachet from "../components/ModalAddPachet.jsx";

const PachetPage = () => {
    const [pachete, setPachete] = useState([]);

    const fetchPachete = async () => {
        try {
            const response = await getPacheteServicii();
            setPachete(response.data);
        } catch (error) {
            console.error("Eroare obtinere pachete", error);
        }
    };

    useEffect(() => {
        fetchPachete();
    }, []);

    return (
        <div className="container">
            <h2>Pachete de Servicii</h2>
            <button type="button" className="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#addPachetStaticBackdrop">
                Adauga Pachet
            </button>
            <div className="row">
                {pachete.map((pachet) => (
                    <div className="col-md-4" key={pachet.id}>
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{pachet.nume}</h5>
                                <p className="card-text">
                                    <strong>Descriere:</strong> {pachet.descriere}
                                    <br />
                                    <strong>Cost:</strong> {pachet.costPachet} RON
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <ModalAddPachet getAllPachete={fetchPachete} />
        </div>
    );
};

export default PachetPage;