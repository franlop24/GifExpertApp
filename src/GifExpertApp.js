import React, { Fragment, useState } from 'react'

export const GifExpertApp = () => {

    // const categories = ['One Puch', 'Samurai X', 'Dragol Ball'];

    const [categories, setCategories] = useState(['One Puch', 'Samurai X', 'Dragon Ball'])

    const handleApp = () => {
        setCategories([...categories, 'Saint Seiya']);
    }

  return (
    <Fragment>
        <h2>GifExpertApp</h2>
        <hr />

        <button onClick={ handleApp }>Agregar</button>
        <ol>
            { categories.map( category  => {
                return <li key = { category }>{ category }</li>
            }) }
        </ol>
    </Fragment>
  )
}
