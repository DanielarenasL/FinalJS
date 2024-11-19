import '../styles/tablero.css'
import '../styles/carticas.css'
const Cartas = () =>{
    const imagenes = [
        './images/gojo.png',
        './images/levi.jpg',
        './images/rudeus.jpg',
        './images/mereoleona.jpg',
        './images/naruchan.png',
        './images/oikawa.jpeg'
    ]
    const duplicacion = imagenes.flatMap(carta => [carta, carta]).sort(() => Math.random() - 0.4) 
    console.log(duplicacion)
    return(
        <div className='tablerito'>
            <ul className="contenedor">
                {
                    duplicacion.map((carta, index) =>(
                        <li key={index}>
                            <div className="cartica">
                                 
                                <img src={carta} alt="vale mondá esta vaina"/>
                                    
                            </div>

                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Cartas;
