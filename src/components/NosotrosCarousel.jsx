import foto1 from "../images/foto1.png"
import foto2 from "../images/foto2.png"
import foto3 from "../images/foto3.png"

const NosotrosCarousel = () => {
    return (
        <>
            <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class="active" aria-current="true"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item">
                        <img
                            className="d-block mx-auto"
                            src={foto1}
                            alt="" height="500" width="100%" />
                        <div class="container">
                            <div class="carousel-caption text-start">
                                <h1>AQUI TE PODEMOS AYUDAR</h1>
                                <p class="opacity-75">PREGUNTA POR NUESTRO ASESORAMIENTO</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item active">
                        <img
                            className="d-block mx-auto"
                            src={foto2}
                            alt="" height="500" width="100%" />
                        <div class="container">
                            <div class="carousel-caption">
                                <h1>CONTAMOS CON LOS MEJORES ESPECIALISTAS EN TODAS LAS AREAS</h1>
                                <p>TU SALUD MENTAL ES LO MAS IMPORTANTE</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img
                            className="d-block mx-auto"
                            src={foto3}
                            alt="" height="500" width="100%" />
                        <div class="container">
                            <div class="carousel-caption text-end">
                                <h1>SIEMPRE HAY SOLUCION A TODO</h1>
                                <p>CONOCE NUESTRAS INSTALACIONES</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
export default NosotrosCarousel;