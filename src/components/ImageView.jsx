import { useEffect } from "react";
import { useRef, useContext } from "react";
import placeholder from "../assets/placeholder.jpg";
import FilterContext from "./Contextprovider";
// import Crop from './Crop'
// import { Link } from 'react-router-dom'
// import Cropper from 'react-easy-crop'

const ImageView = () => {
  const {
    blur,
    bright,
    saturate,
    inversion,
    rotate,
    flipH,
    flipV,
    contrast,
    hue,
    grayS,
    sepia,
    setimageUp
  } = useContext(FilterContext);
  const aref = useRef();
  const imgref = useRef();
  const ref = useRef(null);
  let img ="";
  
  function details() {
    let file = ref.current.files[0];
    if (!file) return;
    img = URL.createObjectURL(file);
    imgref.current.src = img;
    setimageUp(false)
    // cropR.current.image = img
  }
  const flipHorizontal = flipH ? -1 : 1;
  const flipVertical = flipV ? -1 : 1;

  function applyFilter() {
    imgref.current.style.filter = `  contrast(${contrast}%) brightness(${bright}%) saturate(${saturate}%) sepia(${sepia}%) invert(${inversion}%) blur(${blur}px) hue-rotate(${hue}deg) grayscale(${grayS}%)`;
    imgref.current.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical}) `;
  }
  useEffect(() => {
    applyFilter();
  }, [
    bright,
    inversion,
    saturate,
    blur,
    rotate,
    flipH,
    flipV,
    contrast,
    hue,
    grayS,
    sepia,
  ]);
function selectImage(){
    ref.current.click()
}
  const canref = useRef();
  const canvas = canref.current;
  function saveImg() {
    const ctx = canvas.getContext("2d");
    canvas.height = imgref.current.naturalHeight;
    canvas.width = imgref.current.naturalWidth;
    ctx.filter = ` contrast(${contrast}%) brightness(${bright}%) saturate(${saturate}%) invert(${inversion}%) blur(${blur}px) hue-rotate(${hue}deg) grayscale(${grayS}%) sepia(${sepia}%)`;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    if (rotate !== 0) {
      ctx.rotate((rotate * Math.PI) / 180);
    }
    ctx.scale(flipHorizontal, flipVertical);
    ctx.drawImage(
      imgref.current,
      -canvas.width / 2,
      -canvas.height / 2,
      canvas.width,
      canvas.height
    );
    aref.current.href = canvas.toDataURL();
    aref.current.click();
  }

  return (
    <div className="imageViewParent">
      {/* <div className="imageP"> */}
        <img
          className="imageView"
          src={placeholder}
          ref={imgref}
          alt="deafult-image"
        />
      {/* </div> */}
      <div className="imageBtns">
        <button className="chooseBtn" onClick={selectImage}>
          Choose Image..
        </button>
        <button className="saveBtn" onClick={() => saveImg()}>
          Save Image
        </button>
    
      </div>
      <div>
        <input
          type="file"
          name="img"
          accept="image/*"
          ref={ref}
          onChange={() => details()}
          hidden
        />
        <a ref={aref} href={placeholder} download="image" hidden />

        <canvas className="" ref={canref} hidden></canvas>
      </div>
    </div>
  );
};

export default ImageView;
