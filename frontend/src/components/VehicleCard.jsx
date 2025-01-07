import ModalRezervare from "./ModalRezervare.jsx";
import ModalEditVehicle from "./ModalEditVehicle.jsx";
import PropTypes from 'prop-types';

const VehicleCard = ({ masina, user }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={masina.photoURL} className="card-img-top" alt={masina.producator} />
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
                {user && (
                    <button type="button" className="btn btn-lg btn-primary mb-3" data-bs-toggle="modal"
                        data-bs-target="#addInchiriereStaticBackdrop">Rezervare masina</button>
                )}
                {user?.tip === "admin" && (
                    <button type="button" className="btn btn-lg btn-warning" data-bs-toggle="modal"
                        data-bs-target="#editVehicleStaticBackdrop">Editare masina</button>
                )}
            </div>
            {user && <ModalRezervare masina={masina} utilizator={user} />}
            <ModalEditVehicle vehicle={masina} />
        </div>
    );
}

VehicleCard.propTypes = {
    masina: PropTypes.shape({
        photoURL: PropTypes.string.isRequired,
        producator: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        costInchiriere: PropTypes.number.isRequired,
        dataFabricatie: PropTypes.string.isRequired,
        kilometraj: PropTypes.number.isRequired,
        numarInmatriculare: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
    }).isRequired,
    user: PropTypes.shape({
        idUtilizator: PropTypes.number,
        tip: PropTypes.string,
    }),
};

export default VehicleCard;