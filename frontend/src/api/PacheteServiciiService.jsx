import axios from "axios";

const PACHETE_SERVICII_API_BASE_URL = "http://localhost:8080/pachetServicii";

export async function savePachet(pachet) {
    return await axios.post(PACHETE_SERVICII_API_BASE_URL, pachet);
}

export async function getPacheteServicii(){
    return await axios.get(PACHETE_SERVICII_API_BASE_URL);
}