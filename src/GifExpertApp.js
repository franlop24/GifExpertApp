import React, { Fragment, useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Puch', 'Samurai X', 'Dragon Ball'])

    // const handleApp = () => {
    //     setCategories([...categories, 'Saint Seiya']);
    // }

  return (
    <Fragment>
        <h2>GifExpertApp</h2>
        <AddCategory></AddCategory>
        <hr />
        <ol>
            { categories.map( category  => {
                return <li key={ category }>{ category }</li>
            }) }
        </ol>
    </Fragment>
  )
}
