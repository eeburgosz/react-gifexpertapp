import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category} ) => {  //-----> El 'category' del 'map' que me trae imagen por imagen.

    const {loading, data:images}= useFetchGifs(category);    
    //const [images, setImages] = useState([]);

    //console.log(data)
    
    return (
        <div>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p>Loading</p>}
                <div className="card-grid">
                    {
                        images.map(img => (
                        
                            <GifGridItem 
                                key={img.id}
                                /* img={img} */
                                {...img}
                            />
                        ))
                    }
                </div>                
        </div>
    )
}
