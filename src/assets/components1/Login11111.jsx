import { useState } from "react";

const Login11 = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email", email);
        console.log("Password", password);

        const userData = {
            email: email,
            contrasena: password,
        };

        fetch("https://private-ab4c0-login652.apiary-mock.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else if (response.status === 401) {
                    return response.json();
                } else {
                    throw new Error("Error desconocido");
                }
            })
            .then((data) => {
                if (data.mensaje === "Inicio de sesión exitoso") {
                    if (
                        userData.email === "123@123.123" &&
                        userData.contrasena === "123"
                    ) {
                        console.log("Inicio de sesión exitoso");
                    } else {
                        console.log("Inicio de sesió fallido: Datos incorrectos");
                    }
                } else if (data.mensaje === "Inicio de sesión fallido") {
                    console.log("Inicio de sesión fallido");
                } else {
                    console.log("Respuesta inesperada de la API");
                }
            })
            .catch((error) => {
                console.log("Hubo un error en la solicitud" + { error });
            })
    };

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-body">
                                <h2>INICIAR SESION</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">
                                            CORREO ELECTRONICO
                                        </label>
                                        <input type="email"
                                            className="form-control"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required />
                                    </div>

                                    <div>
                                        <label>
                                            CLAVE
                                        </label>
                                        <input type="password"
                                            id="password"
                                            className="form-control"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required />
                                    </div>
                                    <br></br>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary">
                                            INICIAR SESION
                                        </button>
                                    </div>
                                </form >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Login11;

