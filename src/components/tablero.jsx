import { useState, useEffect } from 'react';
import '../styles/carticas.css';
import { obtenerim } from '../js/obtenerim';
import Informacion from './informacion';
import {guardarPuntuacion} from '../js/obtenerpuntua'; 

let tamano = 2;


const Cartas = () => {
    const [imagenes, setImages] = useState(obtenerim(tamano)); // Genera las cartas
    const [selected, setSelected] = useState([]); // Cartas temporalmente seleccionadas
    const [opened, setOpened] = useState([]); // Cartas que ya han sido emparejadas
    const [intentos, setIntentos] = useState(0);
    const [errores, setErrores] = useState(0);
    const [aciertos, setAciertos] = useState(0);
    const [ronda, setRonda] = useState(1); 
    const [puntos, setPuntos] = useState(0)
    const [puntuaciones, setPuntuaciones] = useState([]);
    const [maxpuntuacion, setMaxpuntuacion] = useState();

    // Manejar la selección de cartas
    //si la carta seleccionada actualmente no está seleccionada,y solo se han seleccionado dos cartas como maximo
    //al igual, si no está abierta permanentemente(pues que ya encontró la pareja), va actualizar
    //el estado de selected (setSelected) que es la que almacena las cartas seleccionadas al jugar

    // Actualizar puntuaciones al guardar una nueva
    const manejarGuardarPuntuacion = () => {
        const nombre = prompt("Escribe tu nombre para guardar la puntuación:") || "Anónimo";
        guardarPuntuacion(nombre, maxpuntuacion + 10);
        const nuevasPuntuaciones = JSON.parse(localStorage.getItem('puntuaciones')) || [];
        setPuntuaciones(nuevasPuntuaciones);
    };
    //funcion que guarda el puntaje maximo que alcanza el jugador en un localstorage del navegador
    

    const handleClick = (carta) => {
        if (selected.length < 2 && !selected.includes(carta) && !opened.includes(carta)) {
            setSelected((prev) => [...prev, carta]);
//toma el estado anterior(prev y la añade a la carta actual (carta)), por ejemplo
//Si selected es inicialmente [], al seleccionar la carta gojo, el nuevo valor será ['gojo'].
//Si luego seleccionas otra carta eren, el nuevo valor será ['gojo', 'eren'].

            
        }
    };

    // Compara las cartas seleccionadas y actualizar el estado
    //Este useEffect se activa cada vez que cambia el estado selected, primero verifica
    //si el jugador ha seleccionado exactamente dos cartas
    useEffect(() => {
        if (selected.length === 2) {
            const [firstCard, secondCard] = selected; //Asigna las dos cartas seleccionadas a las variables firstCard y secondCard
            //Divide las cartas en partes usando el carácter | como separador, es decir, '1|A'.split('|')[1] → 'A' lo que representa la imagen que se le está proporcionando
            setIntentos((prev) => prev + 1);
            //Informacion(intentos, errores, aciertos, ronda)
            console.log(intentos)
            if (firstCard.split('|')[1] === secondCard.split('|')[1]) { //Si los valores coinciden, las cartas son emparejadas
                // se a ctualiza el estado opened para incluir ambas cartas
                setAciertos((prev) => prev + 1);
                setPuntos((prev) => prev + 10)
                setMaxpuntuacion((puntos))
                //al acertar aumenta el numer de aciertos y los puntos
                
                setOpened((prev) => [...prev, firstCard, secondCard]);
                //toma el estado anterior(prev y la añade las parejas), por ejemplo
//Si opened es inicialmente [], al seleccionar la carta gojo, el nuevo valor será ['gojo', 'gojo'].
            }else {
                setErrores((prev) => prev + 1)
                if(ronda > 1) {
                    setPuntos((prev) => prev - 5)
                }
                if (puntos <= 0 && ronda > 1) {
                    alert("tan rapido?")
                    manejarGuardarPuntuacion();
                    window.location.reload();
                }
            }
            //si la ronda es mayor a uno y el jugador falla, se le restaran puntos, si llega a perder estando en 0
            //pierde el juego y se reinicia la partida

            // Limpiar las cartas seleccionadas después de 500ms
            setTimeout(() => setSelected([]), 500);
        }
    }, [selected]);

    // Reiniciar el juego y aumentar el nivel
    useEffect(() => {
        //Comprueba si todas las cartas han sido emparejadas y Evita que el efecto se ejecute si no hay cartas cargadas
        if (opened.length === imagenes.length && imagenes.length > 0) {
            setTimeout(() => {
                setRonda((prev) => prev + 1);
                
                tamano += 1; // Incrementa el tamaño, es decir, ingreso primero 3, completo todo, y auemnta 2 ahora me cargan 5 pares y así
                setImages(obtenerim(tamano)); // Carga las nuevas cartas para el siguiente nivel
                setSelected([]); // Limpia las cartas seleccionadas
                setOpened([]); // Limpia las cartas abiertas
            }, 500); // Esperar 1 segundo antes de reiniciar
        }
    }, [opened, imagenes.length]); //El efecto se ejecuta cada vez que cambia el estado de las cartas emparejadas,
    //Asegura que el efecto tambié  n reaccione a cambios en el número de cartas en el tablero

    //esto basicamente es para contruir el la baraja uniforme, es edecir, es que antes 
    //colocaba 5 pares, entonces apareecian disque 6 arriba y 4 abajo, entonces esto es para
    //que se vaya ajutsatndo al numero de columnas dependiendo de las cartas que se eingresan
    const numeroColumnas = Math.min(7, Math.ceil(imagenes.length / 2));
    return (
        <div className="game">
            <div className="informacion">
                <Informacion
                    puntos={puntos}
                    intentos={intentos}
                    errores={errores}
                    aciertos={aciertos}
                    ronda={ronda}
                    puntuaciones={puntuaciones}
                />
                {/* le envia la informacion a el otro archivo para que lo renderice, lo hace con props */}
            </div>
            
        
            <div className="tablerito">
                {/* y aqui basicamnete lo que queremos es ajustar directamente la propiedad del grid no se que aplicando el numero
                de columnas necesarias para que esté bien proporcionado*/}
                <ul className="contenedor" style={{ gridTemplateColumns: `repeat(${numeroColumnas}, 1fr)` }}>
                    
                    {imagenes.map((carta, index) => (
    //imagenes: pues imagenes, las cartas mejor dicho
    //.map: que van a ser iteradas sobre cada carta para generar dinámicamente un li que representa una carta del tablero.
    //index: Proporciona una clave única para cada carta (requerida por React al mapear elementos).
                        <li key={index} onClick={() => handleClick(carta)}>
                        {/*key={index}: Es un identificador único que se necesita para optimizar el renderizado*/}
                        {/*onClick={() => handleClick(carta)}: Llama a la función handleClick al hacer clic en la carta, 
                        pasando la carta seleccionada como argumento*/}

                        {/*selected.includes(carta): Comprueba si la carta actual está en el estado selected (es decir, ha sido seleccionada por el jugador),
    opened.includes(carta): Comprueba si la carta actual está en el estado opened (si ya ha sido emparejada)
    Si alguna de estas condiciones es verdadera, se agrega la clase 'volteada',
    Si ninguna es verdadera, se retorna una cadena vacía (''), lo que significa que no se agrega ninguna clase adicional. */}
                            <div
                                className={`contenido ${
                                    selected.includes(carta) || opened.includes(carta) ? 'volteada' : ''
                                }`}
                            >
                                {/* Frontal de la carta */}
                                <div className="cartica">
                                    <img src="../images/question.jpg" alt="Fondo de la carta" />
                                </div>
                                {/* Trasera de la carta */}
                                <div className="carticaback">
                                    <img src={carta.split('|')[1]} alt="Contenido de la carta" />
                                    {/*carta.split obtiene la imagen asociada a la carta, es decir 1|eren.jpg, solo tomará la segunda
                                    parte que es eren.jpg par amostrar la imagen por completo */}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Cartas;
