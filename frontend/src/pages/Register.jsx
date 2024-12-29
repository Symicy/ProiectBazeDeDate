import React, { useState } from "react";
import {Link} from "react-router-dom";
import {saveUser} from "../api/UtilizatoriService.jsx";

const Register=() => {

    const[succes,setSucces]=useState(false);
    const [formData, setFormData] = useState({
        nume: "",
        prenume: "",
        email: "",
        telefon: "",
        parola: "",
        confirmareParola: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        console.log(formData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.parola !== formData.confirmareParola) {
            alert("Parolele nu se potrivesc!");
            return;
        }
        console.log("Datele de înregistrare:", formData);
        try {
            const valuesUser = {
                nume: formData.nume,
                prenume: formData.prenume,
                email: formData.email,
                telefon: formData.telefon,
                parola: formData.parola,
                tip: 'client',
            };
            await saveUser(valuesUser);
            setFormData({
                nume: "",
                prenume: "",
                email: "",
                telefon: "",
                parola: "",
                confirmareParola: "",
            });
            setSucces(true);
        } catch (err) {
            console.error(err);
            if (!err?.response) {
                alert('Fara raspuns de la server');
            } else if (err.response?.status === 409) {
                alert('Email deja folosit');
            } else {
                alert('Inregistrare esuata');
            }
        }
    };

    return (
        <>
            {succes ? (
                    <div className="container d-flex justify-content-center align-items-center vh-100">
                        <div className="card p-4 shadow" style={{ width: "400px" }}>
                            <h2 className="text-center mb-4">Inregistrare reusita</h2>
                                <Link to="/login" className="btn btn-primary">Autentificare</Link>
                        </div>
                    </div>
                ):(
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="card p-4 shadow" style={{ width: "400px" }}>
                    <h2 className="text-center mb-4">Înregistrare</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Username */}
                        <div className="mb-3">
                            <label htmlFor="nume" className="form-label">
                                Nume utilizator
                            </label>
                            <input
                                type="text"
                                id="nume"
                                name="nume"
                                className="form-control"
                                placeholder="Nume"
                                value={formData.nume}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="prenume" className="form-label">
                                Prenume utilizator
                            </label>
                            <input
                                type="text"
                                id="prenume"
                                name="prenume"
                                className="form-control"
                                placeholder="Prenume"
                                value={formData.prenume}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="exemplu@gmail.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Telefon */}
                        <div className="mb-3">
                            <label htmlFor="telefon" className="form-label">
                                Telefon
                            </label>
                            <input
                                type="tel"
                                pattern={"[0-9]{10}"}
                                id="telefon"
                                name="telefon"
                                className="form-control"
                                placeholder="07xxxxxxxx"
                                value={formData.telefon}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Parolă
                            </label>
                            <input
                                type="password"
                                id="parola"
                                name="parola"
                                className="form-control"
                                placeholder="Parola"
                                value={formData.parola}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Confirm Password */}
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">
                                Confirmă parola
                            </label>
                            <input
                                type="password"
                                id="confirmareParola"
                                name="confirmareParola"
                                className="form-control"
                                placeholder="Reintrodu parola"
                                value={formData.confirmareParola}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn btn-primary w-100">
                            Înregistrează-te
                        </button>

                        {/* Sign-in Link */}
                        <p className="text-center mt-3">
                            Ai deja cont? <Link to="/login">Logare</Link>
                        </p>
                    </form>
                </div>
            </div>
            )}
        </>
    )
}

export default Register;

