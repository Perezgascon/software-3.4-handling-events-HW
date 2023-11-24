import React, {useState} from 'react'

export default function PriceInput() {

    const [ price, setPrice] = useState(0);

    const handlePriceChange = (e) => {
        const inputPrice = e.target.value;
        setPrice(inputPrice);
    } 

  return (
    <div>
        <input
        type='number'
        value={price}
        onChange={handlePriceChange}
        ></input>
        <p>Displayed Price: {price}</p>
    </div>
  )
}
