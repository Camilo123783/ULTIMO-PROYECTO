import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><Link className="nav-link px-2 text-body-secondary" to="/">INICIO</Link></li>
                    <li className="nav-item"><Link className="nav-link px-2 text-body-secondary" to="/Testimonios">TESTIMONIOS</Link></li>
                    <li className="nav-item"><Link className="nav-link px-2 text-body-secondary" to="/Servicios">SERVICIOS</Link></li>
                    <li className="nav-item"><Link className="nav-link px-2 text-body-secondary" to="/Contacto">CONTACTO</Link></li>
                    <li className="nav-item"><Link className="nav-link px-2 text-body-secondary" to="/Login">INICIAR SESION</Link></li>
                </ul>
                <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
            </footer>
        </>
    )
}
export default Footer;