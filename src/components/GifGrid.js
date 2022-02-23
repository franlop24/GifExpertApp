import React, { useState, useEffect } from 'react';

export const GifGrid = ({ category }) => {

    const [count, setCount] = useState(0);

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
    }

    useEffect(() => {
        getGifs();
    }, [])

    //getGifs();

  return (
    <div>
        <h3>{ category }</h3>
        <h4>{ count }</h4>
        <button onClick={ () => setCount( count +1 )}>Add</button>
    </div>
  )
}
