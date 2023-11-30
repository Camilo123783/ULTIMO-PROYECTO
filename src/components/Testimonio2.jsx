import Foto from "../images/foto9.png"
import Foto2 from "../images/foto10.png"
const NosotrosFinal = () => {
    return (
        <>
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
               
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">TESTIMONIO #2</h1>
                    <p className="lead">Hace unos años, mi vida cambió para siempre en un instante.
                        Presencié un acto de violencia inimaginable: el asesinato de 7 personas justo
                        frente a mis ojos. El horror y el terror que experimenté en ese momento me dejaron
                        con cicatrices emocionales profundas y un trauma que parecía imposible de superar.
                        Durante mucho tiempo, viví atrapado en un estado constante de miedo y ansiedad.
                        Las imágenes de aquel fatídico día se repetían una y otra vez en mi mente, y el
                        simple sonido de un ruido repentino podía desencadenar una reacción de pánico.
                        Mi vida se volvió un caos, y sentía que no había escape.
                        Fue entonces cuando decidí buscar ayuda en un centro especializado en traumas.
                        Desde el primer momento en que entré por esas puertas, sentí un ambiente de compasión
                        y apoyo. El equipo de profesionales me recibió con los brazos abiertos y me brindó
                        un espacio seguro para compartir mi experiencia y comenzar mi proceso de sanación.
                        A través de terapia individual y grupos de apoyo, pude expresar mis emociones y
                        compartir mi historia con personas que habían pasado por experiencias similares.
                        El hecho de saber que no estaba solo en mi sufrimiento me dio un sentido de comunidad
                        y fortaleza para seguir adelante.
                        Los terapeutas me enseñaron técnicas de manejo del estrés y me proporcionaron
                        herramientas para lidiar con los recuerdos traumáticos. Aprendí a reconocer mis
                        desencadenantes y a implementar estrategias para controlar mi ansiedad. Además,
                        me enseñaron técnicas de relajación y mindfulness que me ayudaron a encontrar
                        momentos de calma en medio del caos.
                        El proceso no fue fácil, hubo momentos en los que sentí que no avanzaba o que
                        volvía a caer en viejos patrones de miedo. Pero el apoyo constante del equipo
                        del centro de ayuda y la terapia continuada me brindaron la fuerza y la determinación
                        para seguir adelante.
                        Hoy, puedo decir con gratitud que he logrado superar gran parte de mi trauma.
                        Aunque sé que llevará tiempo sanar por completo, me siento más fuerte y más capaz
                        de enfrentar los desafíos que la vida pueda presentarme. Estoy agradecido por el
                        centro de ayuda y por todos los profesionales que me han apoyado en mi camino hacia
                        la recuperación.
                        Si estás lidiando con un trauma o una experiencia traumática, quiero alentarte
                        a buscar ayuda. No tienes que enfrentar esto solo. Hay recursos y personas dispuestas
                        a brindarte el apoyo y la guía que necesitas para sanar y reconstruir tu vida.
                        Si yo pude encontrar el camino hacia la sanación, sé que tú también puedes hacerlo.
                        ¡No tengas miedo de pedir ayuda y comenzar tu camino hacia la sanación!</p>
                </div>
                <div className="col-10 col-sm-8 col-lg-6">
                    <img className="d-block mx-auto" src={Foto} alt="" height="500" width="100%" />
                    <img className="d-block mx-auto" src={Foto2} alt="" height="500" width="100%" />
                </div>
            </div>


        </>
    )
}
export default NosotrosFinal;