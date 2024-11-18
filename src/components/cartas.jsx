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
    const duplicacion = imagenes.map(carta => [carta, carta]) 
    console.log(duplicacion)
    return(
        <div>
            <ul className="contenedor">
                {
                    imagenes.map((carta, index) =>(
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