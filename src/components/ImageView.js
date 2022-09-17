
import React from 'react'
import { useEffect } from 'react'
import { useState, useRef, useContext } from 'react'
import placeholder from '../assets/placeholder.jpg'
import FilterContext from './Contextprovider'

const ImageView = () => {
    const { blur, bright, saturate, inversion, rotate, flipH, flipV } = useContext(FilterContext)
    const aref = useRef()
    const imgref = useRef()
    const ref = useRef(null)
    function details() {
        let file = ref.current.files[0]
        if (!file) return;
        imgref.current.src = URL.createObjectURL(file)
    }

    function applyFilter() {
        imgref.current.style.filter = `brightness(${bright}%) invert(${inversion}%) saturate(${saturate}%) blur(${blur}px) `;
        imgref.current.style.transform = `rotate(${rotate}deg) scale(${flipH ? -1 : 1},${flipV ? -1 : 1}) `
    }
    useEffect(() => {
        applyFilter()
    }, [bright, inversion, saturate, blur, rotate, flipH, flipV])
    const flipHorizontal = flipH ? -1 : 1
    const flipVertical = flipV ? -1 : 1
    const canref = useRef()
    const canvas = canref.current
    function saveImg() {
        const ctx = canvas.getContext("2d");
        canvas.width = imgref.current.naturalWidth;
        canvas.height = imgref.current.naturalHeight;
        ctx.filter = `brightness(${bright}%) saturate(${saturate}%) invert(${inversion}%) blur(${blur}%)`;
        ctx.translate(canvas.width / 2, canvas.height / 2);
        if (rotate !== 0) {
            ctx.rotate(rotate * Math.PI / 180);
        }
        ctx.scale(flipHorizontal, flipVertical);
        ctx.drawImage(imgref.current, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
        aref.current.href = canvas.toDataURL();
        aref.current.click();
    }
    return (

        <div className='w-auto h-auto rounded-sm flex flex-col items-center space-x-2   justify-center text-white' >
            <input type='file' name='img' accept='image/*' ref={ref} onChange={() => details()} hidden />
            <div className='flex flex-grow overflow-hidden ml-2 items-center justify-center rounded-sm '>
                <img className='h-full w-full max-h-96 max-w-md object-contain ' src={placeholder} ref={imgref} />
            </div>
            <div className="flex space-x-3 mt-2">

                <button className='bg-slate-300 text-gray-800 p-2 rounded-sm m-1 self-center' onClick={() => ref.current.click()} >Choose Image..</button>
                <button className='bg-cyan-300 text-gray-800 p-2 rounded-sm m-1 self-center' onClick={() => saveImg()} >Save Image</button>
            </div>
            <a ref={aref} href={placeholder} downloa="image.jpg" hidden />
            <canvas ref={canref} className='h-0 w-0' hidden >

            </canvas>
        </div>

    )
}

export default ImageView