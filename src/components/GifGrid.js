import React, { useState, useEffect, Fragment } from 'react';
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        //setImages(getGifs(category));
        getGifs(category)
            //.then(gifs => setImages(gifs))
            .then( setImages )
    }, [category])

    //getGifs();

  return (
    <Fragment>
        <h3>{ category }</h3>
        <div className='card-grid'>
                {
                    images.map( ( image ) => (
                        <GifGridItem
                            key={ image.id }
                            { ...image } />
                    ))
                }
        </div>
    </Fragment>
  )
}
