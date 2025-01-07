import { useRef, useState, useEffect } from "react";
import { updateVehicle, deleteVehicle, updatePhoto } from "../api/VehicleService.jsx";

const ModalEditVehicle = ({ vehicle }) => {
    const fileVehicleRef = useRef(null);
    const [fileVehicle, setFileVehicle] = useState(undefined);
    const [vehicul, setVehicul] = useState({
        idVehicul: "",
        costInchiriere: "",
        producator: "",
        model: "",
        dataFabricatie: "",
        status: "",
        kilometraj: "",
        numarInmatriculare: "",
        photoURL: "",
    });

    useEffect(() => {
        setVehicul(vehicle);
        console.log(vehicle);
        console.log(vehicul);
    }, [vehicle]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVehicul({ ...vehicul, [name]: value });
    };

    const onchangeVehicleFile = (e) => {
        setFileVehicle(e.target.files[0]);
    };

    const handleEditVehicle = async (event) => {
        event.preventDefault();
        try {
            await updateVehicle(vehicul);
            if (fileVehicle) {
                const formData = new FormData();
                formData.append("file", fileVehicle, fileVehicle.name);
                formData.append("id", vehicle.idVehicul);
                await updatePhoto(formData);
                setFileVehicle(undefined);
                fileVehicleRef.current.value = null;
            }
            window.location.reload();
        } catch (error) {
            console.error("Error updating vehicle:", error);
        }
    };

    const handleDeleteVehicle = async () => {
        try {
            await deleteVehicle(vehicle.idVehicul);
            window.location.reload();
        } catch (error) {
            console.error("Error deleting vehicle:", error);
        }
    };

    return (
        <div className="modal fade" id="editVehicleStaticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Editare masina</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={handleEditVehicle}>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">Producator:</span>
                                <input type="text" name="producator" value={vehicul.producator}
                                    onChange={handleChange} className="form-control"
                                    aria-label="Sizing example input"
                                    placeholder="Ex: Audi"
                                    aria-describedby="inputGroup-sizing-default" required />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">Model:</span>
                                <input type="text" name="model" value={vehicul.model}
                                    onChange={handleChange} className="form-control"
                                    aria-label="Sizing example input"
                                    placeholder="Ex: A4"
                                    aria-describedby="inputGroup-sizing-default" required />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">Data fabricatie:</span>
                                <input type="text" value={vehicul.dataFabricatie} name="dataFabricatie"
                                    onChange={handleChange} className="form-control"
                                    placeholder="YYYY-MM-DD"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-default" required />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">Cost inchiriere:</span>
                                <input type="text" value={vehicul.costInchiriere} name="costInchiriere"
                                    onChange={handleChange} className="form-control"
                                    aria-label="Sizing example input"
                                    placeholder="Ex: 100"
                                    aria-describedby="inputGroup-sizing-default" required />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">Kilometraj:</span>
                                <input type="text" value={vehicul.kilometraj} name="kilometraj"
                                    onChange={handleChange} className="form-control"
                                    aria-label="Sizing example input"
                                    placeholder="Ex: 100.000"
                                    aria-describedby="inputGroup-sizing-default" required />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">Numar inmatriculare:</span>
                                <input type="text" value={vehicul.numarInmatriculare} name="numarInmatriculare"
                                    onChange={handleChange} className="form-control"
                                    aria-label="Sizing example input"
                                    placeholder="Ex: B-123-ABC"
                                    aria-describedby="inputGroup-sizing-default" required />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">Status:</span>
                                <div className="d-flex mt-1 ms-3">
                                    <div className="form-check me-3">
                                        <input className="form-check-input" type="radio" name="status"
                                            id="statusDisponibila" value="Disponibil"
                                            checked={vehicul.status === "Disponibil"}
                                            onChange={handleChange} required />
                                        <label className="form-check-label" htmlFor="statusDisponibil">
                                            Disponibil
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="status"
                                            id="statusIndisponibila" value="Indisponibil"
                                            checked={vehicul.status === "Indisponibil"}
                                            onChange={handleChange} required />
                                        <label className="form-check-label" htmlFor="statusIndisponibil">
                                            Indisponibil
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formFileVehicle" className="form-label">Adaugare poza masina</label>
                                <input className="form-control" type="file" id="formFileVehicle" ref={fileVehicleRef}
                                    name="photoURL" onChange={onchangeVehicleFile} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Inchide</button>
                            <button type="submit" className="btn btn-primary">Salveaza</button>
                            <button type="button" className="btn btn-danger" onClick={handleDeleteVehicle}>Sterge</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalEditVehicle;