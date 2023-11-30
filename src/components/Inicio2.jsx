import Foto from "../images/foto5.png"
const NosotrosFinal = () => {
    return (
        <>
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
               
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Nuestro objetivo es fomentar la conciencia y
                        la comprensión de estos trastornos, desmitificar los estigmas asociados y proporcionar información basada en evidencia científica.</h1>
                    <p className="lead">Entendemos que cada trastorno mental es único y puede afectar a las personas de manera diferente, por lo que nos esforzamos
                        por ofrecer una perspectiva holística y empática.</p>
                </div>
                <div className="col-10 col-sm-8 col-lg-6">
                    <img className="d-block mx-auto" src={Foto} alt="" height="500" width="100%" />
                </div>
            </div>


        </>
    )
}
export default NosotrosFinal;