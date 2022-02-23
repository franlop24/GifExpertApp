// import React, { useState, useEffect, Fragment } from 'react';
import React, { Fragment } from 'react';
// import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { loading } = useFetchGifs();

    // const [images, setImages] = useState([])

    // useEffect(() => {
    //     //setImages(getGifs(category));
    //     getGifs(category)
    //         //.then(gifs => setImages(gifs))
    //         .then( setImages )
    // }, [category])

    //getGifs();

  return (
    <Fragment>
        <h3>{ loading ? 'Cargando...' : 'Data loaded'}</h3>
        {/* <div className='card-grid'>
                {
                    images.map( ( image ) => (
                        <GifGridItem
                            key={ image.id }
                            { ...image } />
                    ))
                }
        </div> */}
    </Fragment>
  )
}
