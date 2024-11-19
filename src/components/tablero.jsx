
import { useState } from 'react'
import '../styles/carticas.css'
import { obtenerim } from '../js/obtenerim'

//let tamano = prompt("Ingrese la cantidad de pares");
let tamano = 6;
const Cartas = () =>{
    const [imagenes, setImages] = useState(obtenerim(tamano))
    const [selected, setSelected] = useState([])
    const [opened, setOpened] = useState([])

    let count = 0;

    const handleClick = (carta, index) => {
        if ( !selected.includes(carta)) {
            setSelected((prev) => [...prev, carta]);
            count += 1;
            //console.log(count)
            console.log(index)
        }
        if(selected.length >= 2) {
            setTimeout(() => {
                setSelected([]);
                count = 0
            }, 100);
            
        }
    };

    let estado = false; 
    return(
        <div className='tablerito'>
            <ul className="contenedor">
                {
                    imagenes.map((carta, index) =>(
                        <li key={index} onClick={()=>handleClick(carta, index)}>
                            <div div className={`contenido ${selected.includes(carta) ? 'volteada' : ''}`}>
                                { estado = selected.includes(carta)}
                                <div className="cartica">
                                    <img src="" alt="vale mondá esta vaina"/>
                                </div>
                                <div className="carticaback">
                                    <img src={carta.split('|')[1]} alt="vale mondá esta vaina"/>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Cartas;
