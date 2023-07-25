import { useState } from 'react'
import FilterContext from './Contextprovider'
const FilterState = (props) => {

    const [blur, setblur] = useState(0)
    const [bright, setbright] = useState(100)
    const [saturate, setsaturate] = useState(100)
    const [inversion, setinversion] = useState(0)
    const [rotate, setrotate] = useState(0)
    const [flipH, setflipH] = useState(false)
    const [flipV, setflipV] = useState(false)
    const [contrast, setcontrast] = useState(100)
    const [hue, sethue] = useState(0)
    const [grayS, setgrayS] = useState(0)
    const [sepia, setsepia] = useState(0)
    const [imageUp, setimageUp] = useState(true)

    return (
        <FilterContext.Provider value={{ blur, setblur, bright, setbright, saturate, setsaturate, inversion, setinversion,imageUp,setimageUp, rotate, setrotate, flipH, setflipH, flipV, setflipV, contrast, setcontrast, hue, sethue, grayS, setgrayS, sepia, setsepia }} >{props.children}</FilterContext.Provider>
    )
}

export default FilterState