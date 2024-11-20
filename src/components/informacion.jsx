import '../styles/informacion.css'

function Informacion({intentos, errores, aciertos, ronda}) {
    return (
        <div className="informacion">
            
            <div className="puntuacion">
                <label htmlFor="">Intentos: </label>
                <p>{intentos}</p>
                <label htmlFor="">Errores: </label>
                <p>{errores}</p>
                <label htmlFor="">Aciertos: </label>
                <p> {aciertos} </p>
                <label htmlFor="">Ronda: </label>
                <p> {ronda} </p>
            </div>
        </div>
    );
  
}

export default Informacion;
