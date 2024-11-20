export const obtenerim = (size) =>{
    const imagenes = [
        './images/gojo.png',
        './images/levi.jpg',
        './images/rudeus.jpg',
        './images/mereoleona.jpg',
        './images/naruchan.png',
        './images/oikawa.jpeg',
        '/images/jeanne.png',
        '/images/eren.jpg',
        '/images/orsted.jpg',
        '/images/papasote.jpeg',
        '/images/zero.jpeg'

    ]

    const duplicacion = imagenes.slice(0,size)
// Es un método de arrays en JavaScript que devuelve una copia de una parte del array original
// El array original no se modifica, entonces es como verlo de esta forma, yo ingreso 5 cartas
//el array que me mostrará sería algo como [Gojo, Eren, Zero, Mereoleona, Carta Original]

    return duplicacion.flatMap(carta => [`1|${carta}`, `2|${carta}`]).sort(() => Math.random() - 0.4) 
}

//flatmap basicamente va a itera sobre cada elemento del array (carta) y devuelve un nuevo 
//array que luego se aplana (es decir, se convierte en un único array en lugar de arrays anidados)
//Para cada carta, generamos un array con dos elementos:
//1|${carta} → Es la primera copia de la carta (prefijada con 1|).
//2|${carta} → Es la segunda copia de la carta (prefijada con 2|).
//por ejemplo, carta es la carta original, supongamos que es la imagen de gojo
//con el resultado de flatMap será: 
//['1|Gojo', '2|Gojo', '1|Eren', '2|Eren', '1|Copia1', '2|Copia2'], no es que cada carta tenga un id diferente
//es que por cada carta (podemos verlo como) generará dos copias con identación de 1 y 2
// ya luego sort las coloca al azar 
