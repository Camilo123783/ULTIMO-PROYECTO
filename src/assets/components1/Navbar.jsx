import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav className="navbar bg-dark border-bottom border-body"
                data-bs-theme="dark">
                <div className="container">
                    <Link className="btn btn-outline-primary" to="/">INICIO</Link>
                    <Link className="btn btn-outline-primary" to="/Testimonios">TESTIMONIOS</Link>
                    <Link className="btn btn-outline-primary" to="/Servicios">SERVICIOS</Link>
                    <Link className="btn btn-outline-primary" to="/Contacto">CONTACTO</Link>
                    <Link className="btn btn-outline-primary" to="/Login">INICIAR SESION</Link>
                </div>
            </nav>
        </>
    )
}
export default Navbar;
