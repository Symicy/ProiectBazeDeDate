import {useEffect, useRef, useState} from "react";
import {saveRezervare} from "../api/RezervareService.jsx";
import {getPacheteServicii} from "../api/PacheteServiciiService.jsx";

const ModalRezervare=({masina, utilizator})=>{
    const [pacheteServicii, setPacheteServicii] = useState([]);
    const [rezervare, setRezervare] = useState({
        dataInceput: "",
        dataIncheiere: "",
        idVehicul: masina.idVehicul,
        idUtilizator: utilizator.idUtilizator,
        idPachet: "",
        costPachet: 0.0,
        status: "",
        costTotal: 0.0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRezervare((prevState) => {
            const updatedRezervare = { ...prevState, [name]: value };
            if (name === "idPachet") {
                const pachetSelectat = pacheteServicii.find((pachet) => pachet.idPachet === parseInt(value));
                updatedRezervare.costPachet = pachetSelectat?.costPachet || 0;
            }
            calculateCost(updatedRezervare);
            return updatedRezervare;
        });
        console.log(rezervare);
    };

    const handleNewInchiriere= async (event)=>{
        event.preventDefault();
        try{
            const valuesRezervare = {
                dataInceput: rezervare.dataInceput,
                dataIncheiere: rezervare.dataIncheiere,
                status: 'in asteptare',
                costTotal: rezervare.costTotal,
            }
            await saveRezervare(valuesRezervare, rezervare.idVehicul, rezervare.idUtilizator, rezervare.idPachet);
            setRezervare({
                dataInceput: "",
                dataIncheiere: "",
                idPachet: "",
                status: "",
                costTotal: "",
            })

        } catch (error) {
            console.error(error);
        }
    };

    const calculateCost = (updatedRezervare) => {
        const dataInceput = new Date(updatedRezervare.dataInceput);
        const dataIncheiere = new Date(updatedRezervare.dataIncheiere);
        const dif = dataIncheiere.getTime() - dataInceput.getTime();
        const zile = Math.ceil(dif / (1000 * 60 * 60 * 24));
        const costMasina = zile * masina.costInchiriere;
        const cost = costMasina + updatedRezervare.costPachet;
        setRezervare((prevState) => ({ ...prevState, costTotal: cost }));
    };

    useEffect(()=>{
        const fetchPacheteServicii=async ()=>{
            try{
                const response=await getPacheteServicii();
                setPacheteServicii(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPacheteServicii();
    },[]);

    return(
        <div className="modal fade" id="addInchiriereStaticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
             aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Inregistrare rezervare</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body d-flex">
                        <div className="details col-6">
                            <h5>Detalii despre masina</h5>
                            <ul>
                                <li><strong>Marcă:</strong> {masina.producator}</li>
                                <li><strong>Model:</strong> {masina.model}</li>
                                <li><strong>Data fabricație:</strong> {masina.dataFabricatie}</li>
                                <li><strong>Preț/zi:</strong> {masina.costInchiriere} RON</li>
                            </ul>
                        </div>
                        <div className="img-fluid col-6 text-center">
                            <img src={masina.photoURL} alt={masina.producator} className="img-fluid"></img>
                        </div>
                    </div>
                    <div className="modal-body d-flex">
                        <h5>Detalii despre client</h5>
                        <ul>
                            <li><strong>Nume:</strong> {utilizator.nume} {" "} {utilizator.prenume}</li>
                            <li><strong>Email:</strong> {utilizator.email}</li>
                            <li><strong>Numar telefon:</strong> {utilizator.telefon}</li>
                        </ul>
                    </div>
                    <form onSubmit={handleNewInchiriere}>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label className="form-label">Alege pachetul de servicii</label>
                                <select
                                    className="form-select"
                                    name="idPachet"
                                    value={rezervare.idPachet}
                                    onChange={handleChange}
                                    required
                                >
                                    <option selected>Alege un pachet</option>
                                    {pacheteServicii.map((pachet) => (
                                        <option key={pachet.idPachet} value={pachet.idPachet}>
                                            {pachet.nume} - {pachet.costPachet} RON
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">Data incepere:</span>
                                <input type="text" name="dataInceput" value={rezervare.dataInceput}
                                       onChange={handleChange} className="form-control"
                                       aria-label="Sizing example input"
                                       placeholder="YYYY-MM-DD"
                                       aria-describedby="inputGroup-sizing-default" required/>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">Data incheiere:</span>
                                <input type="text" name="dataIncheiere" value={rezervare.dataIncheiere}
                                       onChange={handleChange} className="form-control"
                                       aria-label="Sizing example input"
                                       placeholder="YYYY-MM-DD"
                                       aria-describedby="inputGroup-sizing-default" required/>
                            </div>
                        </div>
                        <div className="modal-body text-end">
                            <h5>Cost total: {rezervare.costTotal} RON</h5>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Inchide
                            </button>
                            <button type="submit" className="btn btn-primary">Salveaza</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default ModalRezervare;