import React from 'react';
import laFoto from '../images/123.png'
import Inicio1 from "../components/Inicio1.jsx";
import Inicio2 from "../components/Inicio2.jsx";
import Inicio3 from "../components/Inicio3.jsx";



const Inicio = () => {
    return (
        <>
            <div>
                <img src={laFoto} />
            </div>
            <Inicio1 />
            <Inicio2 />
            <Inicio3 />

        </>
    )
}
export default Inicio;
