import Foto from "../images/foto4.png"
const NosotrosFinal = () => {
    return (
        <>
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img className="d-block mx-auto" src={Foto} alt="" height="500" width="100%" />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Aquí encontrarán un espacio destinado a ofrecer información, recursos y apoyo
                        para comprender y abordar los diferentes trastornos que afectan la salud mental.</h1>
                    <p className="lead">Los trastornos mentales son condiciones que pueden afectar la forma en que pensamos,
                        sentimos y nos comportamos. Pueden manifestarse de diferentes maneras y tener un impacto significativo
                        en la vida diaria de las personas. En esta página, nos enfocamos en brindar una visión comprensiva y
                        actualizada sobre los diversos trastornos mentales.</p>
                </div>
            </div>


        </>
    )
}
export default NosotrosFinal;