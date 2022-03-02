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
        return  product.title.includes(searchValue)
    })

    return ( 
        <div>
            <input className='outline w-96 h-10 fill-stone-500 font-bold text-teal-500' type='text' value={searchValue} onChange={headleInputChange}/>
            {shouldDisplayButton &&  <button className="flex justify-center bg-blue-100 w-20 p-2 text-xl text-white uppercase rounded-md" onClick={handleClearClick}>clear</button>} 
            {/* //if is true display button if is false not show */}

            {filteredProducts.map((product)=> {
                return <div className = " w-full flex flex-wrap justify-center py-12 mx-3 text-red-500" key={product.id}>{product.title},{product.price},{product.image}</div>
            })}
        </div>
    )
}
export default SearchBar