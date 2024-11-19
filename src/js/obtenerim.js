export const obtenerim = (size) =>{
    const imagenes = [
        './images/gojo.png',
        './images/levi.jpg',
        './images/rudeus.jpg',
        './images/mereoleona.jpg',
        './images/naruchan.png',
        './images/oikawa.jpeg'
    ]
    const duplicacion = imagenes.slice(0,size)
    return duplicacion.flatMap(carta => [carta, carta]).sort(() => Math.random() - 0.4) 
}