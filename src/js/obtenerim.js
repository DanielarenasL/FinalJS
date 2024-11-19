export const obtenerim = (size) =>{
    const imagenes = [
        './images/gojo.png',
        './images/levi.jpg',
        './images/rudeus.jpg',
        './images/mereoleona.jpg',
        './images/naruchan.png',
        './images/oikawa.jpeg',
        '/images/jeanne.png'
    ]
    const duplicacion = imagenes.slice(0,size)


    return duplicacion.flatMap(carta => [`1|${carta}`, `2|${carta}`]).sort(() => Math.random() - 0.4) 
}