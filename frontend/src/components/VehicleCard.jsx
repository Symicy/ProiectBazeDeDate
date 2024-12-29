import ModalRezervare from "./ModalRezervare.jsx";

const VehicleCard = ({masina, user }) => {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={masina.photoURL} className="card-img-top" alt={masina.producator}/>
            <div className="card-body">
                <h5 className="card-title">{masina.producator} {masina.model}</h5>
                <p className="card-text"></p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Cost: {masina.costInchiriere} lei/zi</li>
                <li className="list-group-item">Data fabricatie: {masina.dataFabricatie}</li>
                <li className="list-group-item">Kilometraj: {masina.kilometraj}</li>
                <li className="list-group-item">Numar inmatriculare: {masina.numarInmatriculare}</li>
                <li className="list-group-item">Disponibilitate: {masina.status}</li>
            </ul>
            <div className="card-body text-center">
                <button type="button" className="btn btn-lg btn-primary" data-bs-toggle="modal"
                        data-bs-target="#addInchiriereStaticBackdrop">Rezervare masina</button>
            </div>
            <ModalRezervare masina={masina} utilizator={user}/>
        </div>
    );
}
export default VehicleCard;