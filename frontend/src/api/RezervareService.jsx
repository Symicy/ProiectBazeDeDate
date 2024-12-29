import axios from "axios";

const REZERVARE_API_BASE_URL = "http://localhost:8080/rezervari";

export async function saveRezervare(rezervare, idVehicul, idUtilizator, idPachet) {
    return await axios.post(`${REZERVARE_API_BASE_URL}?idUtilizator=${idUtilizator}&idPachetServicii=${idPachet}&idVehicul=${idVehicul}`, rezervare);
}

export async function getRezervari(idUtilizator) {
    return await axios.get(`${REZERVARE_API_BASE_URL}/utilizator/${idUtilizator}`);
}