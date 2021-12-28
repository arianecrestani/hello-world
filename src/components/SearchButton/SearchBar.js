import React, {useState} from 'react'

const SearchBar = (props) => {

    const [searchValue, setSearchValue] = useState('')

    const headleInputChange = (event) => {
       setSearchValue(event.target.value)
    }
    const handleClearClick = () => {
        setSearchValue('')
    }
    const shouldDisplayButton = searchValue.length > 0

    const filteredProducts = props.products.filter((product)=> {
     

        return product.includes(searchValue)
    })

    return ( 
        <div>
            <input className='outline' type='text' value={searchValue} onChange={headleInputChange}/>
            {shouldDisplayButton &&  <button onClick={handleClearClick}>clear</button>} 
            {/* //if is true display button if is false not show */}

            {filteredProducts.map((product)=> {
                return <li key={product}>{product}</li>
            })}
        </div>
    )
}
export default SearchBar