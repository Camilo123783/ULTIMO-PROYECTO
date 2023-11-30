import Foto from "../images/foto6.png"
const NosotrosFinal = () => {
    return (
        <>
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img className="d-block mx-auto" src={Foto} alt="" height="500" width="100%" />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Encontrarán artículos informativos sobre trastornos
                        como la depresión, la ansiedad, el trastorno bipolar, la esquizofrenia, los trastornos de la alimentación, entre
                        otros. </h1>
                    <p className="lead">Además, compartiremos recursos útiles, como terapias recomendadas, técnicas de autocuidado y estrategias
                        para el manejo de los síntomas. Nuestro equipo de expertos en salud mental está comprometido en brindar apoyo y orientación a
                        aquellos que buscan entender mejor los trastornos mentales, tanto para quienes los padecen como para sus seres
                        queridos. Juntos, podemos trabajar hacia la eliminación del estigma y promover una sociedad más inclusiva y compasiva.</p>
                </div>
            </div>


        </>
    )
}
export default NosotrosFinal;