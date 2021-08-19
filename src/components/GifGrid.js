import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {

    const {data:images, loading}= useFetchGifs(category);
   /* const [images, setImages] = useState([])
    useEffect(() => {
        getGifs(category)//es una promesa
            .then(img => setImages(img))
    },[category])//reeact nos obliga a ponerlos como dependecia ya k piensa
                //que podria cambiar el valor, y si pasara  eso se volveria a renderizar el componente
    */
    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
        {loading && <p className="animate__animated animate__flash">Loading</p>}

        <div className="card-grid animate__animated animate__fadeIn">
                {images.map( img => {
                    return <GifGridItem 
                            key={img.id}
                            {...img}
                            />
                })}
            </div>
        </>
    )
}
