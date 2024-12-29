import {useEffect, useState} from "react";
import {getRezervari} from "../api/RezervareService.jsx";

const ProfilePage = ({user}) => {
    const [rezervari, setRezervari] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(user);

    useEffect(()=>{
        const fetchRezervari = async ()=>{
            try{
                const response=await getRezervari(user.idUtilizator);
                setRezervari(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Eroare obtinere rezervari",error);
            } finally {
                setLoading(false);
            }
        };
        fetchRezervari();
    },[user.idUtilizator]);

    if(loading){
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <h2>Rezervările tale</h2>
            {rezervari.length === 0 ? (
                <p>Nu există rezervări efectuate.</p>
            ) : (
                <div className="row">
                    {rezervari.map((rezervare) => (
                        <div className="col-md-4" key={rezervare.id}>
                            <div className="card mb-4">
                                <img
                                    src={rezervare.vehicul.photoURL}
                                    className="card-img-top"
                                    alt={rezervare.vehicul.producator}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {rezervare.vehicul.producator} {rezervare.vehicul.model}
                                    </h5>
                                    <p className="card-text">
                                        <strong>Perioada:</strong> {rezervare.dataInceput} - {rezervare.dataIncheiere}
                                        <br />
                                        <strong>Cost total:</strong> {rezervare.costTotal} RON
                                        <br />
                                        <strong>Status:</strong> {rezervare.status}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProfilePage;