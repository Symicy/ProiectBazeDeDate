import React, { useState } from "react";
import {Link} from "react-router-dom";
import {loginUser} from "../api/UtilizatoriService.jsx";

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        parola: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            console.log("Datele de autentificare:", formData);
            const user = await loginUser(formData.email, formData.parola);
            console.log(JSON.stringify(user));
            localStorage.setItem("utilizator", JSON.stringify(user));
            window.location.reload();
            window.location.href = "/";
        } catch (error) {
            console.error("Eroare la autentificare:", error);
            alert("Email sau parola incorecta!");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow" style={{ width: "400px" }}>
                <h2 className="text-center mb-4">Autentificare</h2>
                <form onSubmit={handleSubmit}>
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
                            placeholder="Introdu adresa de email"
                            value={formData.email}
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
                            placeholder="Introdu parola"
                            value={formData.parola}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary w-100">
                        Autentificare
                    </button>

                    {/* Register Link */}
                    <p className="text-center mt-3">
                        Nu ai cont? <Link to="/register">Inregistrare</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
