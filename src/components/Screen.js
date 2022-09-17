import React from 'react'
import { useContext } from 'react'
import { BiRotateLeft, BiRotateRight } from 'react-icons/bi'
import { TbFlipHorizontal, TbFlipVertical } from 'react-icons/tb'
import FilterContext from './Contextprovider'
const Screen = () => {
    const { blur, setblur, bright, setbright, saturate, setsaturate, inversion, setinversion, rotate, setrotate, flipH, setflipH, flipV, setflipV } = useContext(FilterContext)
    function setTozero() {
        setblur(0);
        setbright(100);
        setsaturate(100);
        setinversion(0);
    }

    return (
        <div className='flex flex-col  justify-center  space-y-5'>
            <p className='text-xl font-bold'>Filters</p>
            <div className='border border-gray-900 p-2'>
                <div className='flex flex-col items-start justify-center'>

                    <label htmlFor='bright'  >Brightness</label>
                    <input type='range' min='1' max='200' id='bright' value={bright} onChange={(e) => setbright(e.target.value)} />
                </div>
                <div className='flex flex-col items-start justify-center'>

                    <label htmlFor='Saturation'  >Saturation</label>
                    <input type='range' min='1' max='200' id='Saturation' value={saturate} onChange={(e) => setsaturate(e.target.value)} />
                </div>
                <div className='flex flex-col items-start justify-center'>

                    <label htmlFor='Blur'  >Blur</label>
                    <input type='range' min='0' max='200' id='Blur' value={blur} onChange={(e) => setblur(e.target.value)} />
                </div>
                <div className='flex flex-col items-start justify-center'>

                    <label htmlFor='inversion'  >Inversion</label>
                    <input type='range' min='0' max='200' id='inversion' value={inversion} onChange={(e) => setinversion(e.target.value)} />

                </div>
            </div>
            <p className='text-xl font-bold'>Rotate and Flip</p>
            <div className='border border-gray-900 px-1 py-2'>

                <div className="flex justify-center space-x-4 items-center ">
                    <button className="text-black bg-slate-400 text-xl rounded-sm " onClick={() => setrotate(rotate - 90)}><BiRotateLeft /></button>
                    <button className="text-black bg-slate-400  text-xl rounded-sm" onClick={() => setrotate(rotate + 90)}><BiRotateRight /></button>
                    <button className="text-black bg-slate-400 text-xl rounded-sm" onClick={() => setflipV(!flipV)}><TbFlipHorizontal /></button>
                    <button className="text-black bg-slate-400 text-xl rounded-sm" onClick={() => setflipH(!flipH)}><TbFlipVertical /></button>
                </div>
            </div>
            <button className='text-white rounded-md bg-gray-700 font-bold hover:bg-red-400' onClick={() => setTozero()} > Reset</button>

        </div>
    )
}

export default Screen