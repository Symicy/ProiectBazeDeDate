import axios from "axios";

const MENTENANTA_API_BASE_URL = "http://localhost:8080/mentenante";

export async function saveMentenanta(mentenanta, idVehicul) {
    return await axios.post(`${MENTENANTA_API_BASE_URL}?idVehicul=${idVehicul}`, mentenanta);
}