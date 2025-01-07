import axios from "axios";

const VEHICLE_API_BASE_URL = "http://localhost:8080/vehicule";

export async function saveVehicle(vehicle) {
    return await axios.post(VEHICLE_API_BASE_URL, vehicle);
}

export async function getVehicles(page=0, size=10) {
    return await axios.get(`${VEHICLE_API_BASE_URL}?page=${page}&size=${size}`);
}

export async function getVehicleById(id) {
    return await axios.get(`${VEHICLE_API_BASE_URL}/${id}`);
}

export async function updateVehicle(vehicle) {
    return await axios.put(VEHICLE_API_BASE_URL, vehicle);
}

export async function updatePhoto(formData) {
    return await axios.put(`${VEHICLE_API_BASE_URL}/photo`, formData);
}

export async function deleteVehicle(id) {
    return await axios.delete(`${VEHICLE_API_BASE_URL}/${id}`);
}
