import { useState } from "react";
import { savePachet } from "../api/PacheteServiciiService.jsx";

const ModalAddPachet = ({ getAllPachete }) => {
    const [pachet, setPachet] = useState({
        nume: "",
        descriere: "",
        costPachet: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPachet({ ...pachet, [name]: value });
    };

    const handleNewPachet = async (event) => {
        event.preventDefault();
        try {
            await savePachet(pachet);
            // Reset fields
            setPachet({
                nume: "",
                descriere: "",
                costPachet: "",
            });
            getAllPachete();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="modal fade" id="addPachetStaticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Adaugare pachet de servicii</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={handleNewPachet}>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">Nume pachet:</span>
                                <input type="text" name="nume" value={pachet.nume}
                                    onChange={handleChange} className="form-control"
                                    aria-label="Sizing example input"
                                    placeholder="Ex: Pachet Premium"
                                    aria-describedby="inputGroup-sizing-default" required />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">Descriere:</span>
                                <input type="text" name="descriere" value={pachet.descriere}
                                    onChange={handleChange} className="form-control"
                                    aria-label="Sizing example input"
                                    placeholder="Descriere pachet"
                                    aria-describedby="inputGroup-sizing-default" required />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">Cost pachet:</span>
                                <input type="text" name="costPachet" value={pachet.costPachet}
                                    onChange={handleChange} className="form-control"
                                    aria-label="Sizing example input"
                                    placeholder="Ex: 200"
                                    aria-describedby="inputGroup-sizing-default" required />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Inchide</button>
                            <button type="submit" className="btn btn-primary">Salveaza</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalAddPachet;