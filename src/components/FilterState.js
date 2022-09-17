import React, { useState } from 'react'
import FilterContext from './Contextprovider'
const FilterState = (props) => {

    const [blur, setblur] = useState(0)
    const [bright, setbright] = useState(100)
    const [saturate, setsaturate] = useState(100)
    const [inversion, setinversion] = useState(0)
    const [rotate, setrotate] = useState(0)
    const [flipH, setflipH] = useState(false)
    const [flipV, setflipV] = useState(false)

    return (
        <FilterContext.Provider value={{ blur, setblur, bright, setbright, saturate, setsaturate, inversion, setinversion, rotate, setrotate, flipH, setflipH, flipV, setflipV }} >{props.children}</FilterContext.Provider>
    )
}

export default FilterState