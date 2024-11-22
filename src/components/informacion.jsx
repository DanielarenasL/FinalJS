import '../styles/informacion.css'
import {obtenerPuntuaciones} from '../js/obtenerpuntua';


function Informacion({puntos, intentos, errores, aciertos, ronda}) {
    const mostrarPuntuaciones = () => {
        const puntuaciones = obtenerPuntuaciones(); // Obtiene puntuaciones de localStorage
        alert(
            puntuaciones.length > 0
                ? puntuaciones
                      .map((p, index) => `${index + 1}. ${p.nombre}: ${p.puntos} puntos`)
                      .join('\n')
                : 'No hay puntuaciones guardadas.'
        );
    };
    //recibe las puntuaciones y las muestra en una alerta
    return (
        <div className="informacion">
            
            <div className="puntuacion">
                <ul>
                    <li>Puntuación: {puntos}</li>
                    <li>Intentos: {intentos}</li>
                    <li>Errores: {errores}</li>
                    <li>Aciertos: {aciertos}</li>
                    <li>Ronda: {ronda}</li>
                </ul>
                {/* Renderiza las estadisticas de la partida y crea el boton para obtener la puntuacion */}
                <button className="btn" onClick={mostrarPuntuaciones}> <h2>Ver puntuacion</h2></button>
            </div>
        </div>
    );
  
}

export default Informacion;
