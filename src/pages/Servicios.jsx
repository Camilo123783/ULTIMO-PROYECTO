import React from 'react';
import laFoto from '../images/foto11.png'
import laFoto2 from '../images/foto12.png'
import laFoto3 from '../images/foto13.png'
import laFoto4 from '../images/foto14.png'
import laFoto5 from '../images/foto15.png'
import laFoto6 from '../images/foto16.png'
import laFoto7 from '../images/foto17.png'
import laFoto8 from '../images/foto18.png'
import laFoto9 from '../images/foto19.png'
import laFoto10 from '../images/foto20.png'
import laFoto11 from '../images/foto21.png'
import laFoto12 from '../images/foto22.png'
import laFoto13 from '../images/foto23.png'
import laFoto14 from '../images/foto24.png'
import laFoto15 from '../images/foto25.png'
import laFoto16 from '../images/foto26.png'


const Servicios = () => {
    return (
        <>
            <h1>SERVICIOS</h1>

            <div className="container d-flex">
                <div className="container">
                    <img src={laFoto} />
                    <img src={laFoto2} />
                    <h1>Plan de terapia individual:</h1>
                    <p>Este plan ofrece sesiones de terapia uno a uno
                        con un profesional de la salud mental.El terapeuta
                        trabajará contigo para identificar tus desafíos y metas,
                        y te brindará el apoyo y las herramientas necesarias
                        para superar tus problemas mentales.</p>
                </div>
                <div className="container">
                    <img src={laFoto3} />
                    <img src={laFoto4} />
                    <h1>Programa de terapia grupal:</h1>
                    <p>En este programa, te unirás a un grupo de personas que
                        también están lidiando con problemas mentales.A través
                        de sesiones grupales, podrás compartir tus experiencias,
                        aprender de los demás y recibir apoyo emocional de
                        personas que comprenden lo que estás pasando.</p>
                </div>
            </div>
            <div className="container d-flex">
                <div className="container">
                    <img src={laFoto5} />
                    <img src={laFoto6} />
                    <h1>Talleres de habilidades de afrontamiento:</h1>
                    <p>Estos talleres se centran en enseñarte habilidades
                        prácticas para manejar el estrés, la ansiedad y otros
                        desafíos mentales.Aprenderás técnicas de relajación,
                        estrategias de comunicación efectiva y métodos para
                        fortalecer tu resiliencia emocional.</p>
                </div>
                <div className="container">
                    <img src={laFoto7} />
                    <img src={laFoto8} />
                    <h1>Programa de rehabilitación psicosocial:</h1>
                    <p>Este programa se enfoca en ayudarte a reintegrarte
                        a la sociedad y recuperar tu independencia.
                        Te brindará apoyo en áreas como la búsqueda de empleo,
                        habilidades sociales, manejo del tiempo y actividades recreativas.</p>
                </div>
            </div>
            <div className="container d-flex">
                <div className="container">
                    <img src={laFoto9} />
                    <img src={laFoto10} />
                    <h1>Servicios de apoyo familiar:</h1>
                    <p>Reconociendo la importancia del apoyo familiar,
                        ofrecemos servicios para involucrar a tus seres
                        queridos en tu proceso de recuperación.Estos
                        servicios incluyen terapia familiar, educación
                        sobre enfermedades mentales y grupos de apoyo
                        para familiares y cuidadores.</p>
                </div>
                <div className="container">
                    <img src={laFoto11} />
                    <img src={laFoto12} />
                    <h1>Programa de atención de crisis:</h1>
                    <p>Si estás en medio de una crisis mental, ofrecemos
                        un programa de atención de crisis que brinda apoyo
                        inmediato y recursos para ayudarte a superar
                        situaciones difíciles.Estamos disponibles las 24
                        horas del día, los 7 días de la semana, para brindarte
                        la atención que necesitas en momentos de urgencia.</p>
                </div>
            </div>
            <div className="container d-flex">
                <div className="container">
                    <img src={laFoto13} />
                    <img src={laFoto14} />
                    <h1>Programa de prevención y promoción de la salud mental:</h1>
                    <p>Este programa se enfoca en fomentar la salud mental y
                        prevenir problemas antes de que se desarrollen, a
                        través de actividades educativas y de promoción de la salud.</p>
                </div>
                <div className="container">
                    <img src={laFoto15} />
                    <img src={laFoto16} />
                    <h1>Servicios de seguimiento y cuidado a largo plazo:</h1>
                    <p>Una vez que hayas completado un programa de ayuda,
                        ofrecemos servicios de seguimiento y cuidado a largo
                        plazo para garantizar que continúes recibiendo el apoyo
                        necesario para mantener una buena salud mental.</p>
                </div>
            </div>

            <h2 className='container'>Recuerda que cada plan de ayuda se adapta a tus necesidades individuales.Te invitamos a comunicarte con nuestro centro de ayuda mental para obtener más información sobre estos planes y discutir cuál sería el más adecuado para ti.</h2>

        </>
    )
}
export default Servicios;


// 