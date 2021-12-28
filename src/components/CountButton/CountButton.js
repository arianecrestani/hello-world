import React, {useState} from 'react'

const CountButton = (props) => {
    const [currentCount, setCurrentCount] = useState(0)

    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy)
    }


    return (
        <div class='p-4'>
            <button className='outline bg-slate-500 flex' onClick={handleClick}>+{props.incrementBy}</button>
            <div>{currentCount}</div>
        </div>
    )
}


export default CountButton

