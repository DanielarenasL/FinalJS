
export const guardarPuntuacion = (nombre, puntos) => {
    
    const puntuacionesGuardadas = JSON.parse(localStorage.getItem('puntuaciones')) || [];

    const nuevaPuntuacion = { nombre, puntos };
    puntuacionesGuardadas.push(nuevaPuntuacion);
    localStorage.setItem('puntuaciones', JSON.stringify(puntuacionesGuardadas));
};
//funcion que guarda la puntuacion en localstorage

export const obtenerPuntuaciones = () => {
    return JSON.parse(localStorage.getItem('puntuaciones')) || [];
};

//funcion que obtiene las puntuaciones