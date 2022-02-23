import React, { useState, useEffect, Fragment } from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=goku&limit=10&api_key=4UVkjquzA8hh4GbhErgWDEd3VzQRCQRN';
        const response = await fetch(url);
        const { data } = await response.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        } )
        console.log(gifs);
        setImages(gifs);
    }

    useEffect(() => {
        getGifs();
    }, [])

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
