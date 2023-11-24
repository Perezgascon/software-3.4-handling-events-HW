import React from 'react'
import PriceInput from './PriceInput'

export default function Product(props) {

    const { name } = props; 


    return (
        <div>
            <h2>{name}</h2>
            <PriceInput />
        </div>
    )
}
