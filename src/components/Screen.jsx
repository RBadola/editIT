import { useContext} from "react";
import { BiRotateLeft, BiRotateRight } from "react-icons/bi";
import { TbFlipHorizontal, TbFlipVertical } from "react-icons/tb";
import FilterContext from "./Contextprovider";
const Screen = () => {
  const {
    blur,
    setblur,
    bright,
    setbright,
    saturate,
    setsaturate,
    inversion,
    setinversion,
    rotate,
    setrotate,
    flipH,
    setflipH,
    flipV,
    setflipV,
    contrast,
    setcontrast,
    hue,
    sethue,
    grayS,
    setgrayS,
    sepia,
    setsepia,
    imageUp,
  } = useContext(FilterContext);
  function setTozero() {
    setblur(0);
    setbright(100);
    setsaturate(100);
    setinversion(0);
    setcontrast(100);
    setgrayS(0);
    setsepia(0);
    sethue(0);
  }

  return (
    <div className="filterParent">
      <p className="title">Filters</p>
      <div className="filterContainer">
        {/* <div> */}
        <div className="sliderContainer">
          <div className="sliders">
            <label htmlFor="bright">Brightness</label>
            <span>{Math.floor(bright / 2)}</span>
          </div>
          <input
            type="range"
            min="1"
            max="200"
            disabled={imageUp}
            id="bright"
            value={bright}
            className=""
            onChange={(e) => setbright(e.target.value)}
          />
        </div>
        <div className="sliderContainer">
          <div className="sliders">
            <label htmlFor="Saturation">Saturation</label>
            <span>{Math.floor(saturate / 2)}</span>
          </div>
          <input
            type="range"
            min="1"
            max="200"
            id="Saturation"
            disabled={imageUp}
            value={saturate}
            className=""
            onChange={(e) => setsaturate(e.target.value)}
          />
        </div>
        <div className="sliderContainer">
          <div className="sliders">
            <label htmlFor="Blur">Blur</label>
            <span>{Math.floor(blur )}</span>
          </div>

          <input
            type="range"
            min="0"
            max="9"
            disabled={imageUp}
            id="Blur"
            value={blur}
            onChange={(e) => setblur(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="sliderContainer">
          <div className="sliders">
            <label htmlFor="inversion">Inversion</label>
            <span>{Math.floor(inversion / 2)}</span>
          </div>

          <input
            type="range"
            min="0"
            max="200"
            disabled={imageUp}
            id="inversion"
            value={inversion}
            onChange={(e) => setinversion(e.target.value)}
            className="w-full"
          />
        </div>
        {/* </div> */}
        {/* <div> */}
        <div className="sliderContainer">
          <div className="sliders">
            <label htmlFor="cont">Contrast</label>
            <span>{Math.floor(contrast/2 )}</span>
          </div>

          <input
            type="range"
            min="0"
            max="200"
            id="cont"
            disabled={imageUp}
            value={contrast}
            onChange={(e) => {
              setcontrast(e.target.value);
            }}
            className="w-full"
          />
        </div>
        <div className="sliderContainer">
          <div className="sliders">
            <label htmlFor="hue">Hue</label>
            <span>{Math.floor(hue / 2)}</span>
          </div>

          <input
            type="range"
            min="0"
            max="180"
            id="hue"
            disabled={imageUp}
            value={hue}
            onChange={(e) => {
              sethue(e.target.value);
            }}
            className="w-full"
          />
        </div>
        <div className="sliderContainer">
          <div className="sliders">
            <label htmlFor="gray">Grayscale</label>
            <span>{Math.floor(grayS / 2)}</span>
          </div>

          <input
            type="range"
            min="0"
            max="200"
            disabled={imageUp}
            id="gray"
            value={grayS}
            onChange={(e) => {
              setgrayS(e.target.value);
            }}
            className="w-full"
          />
        </div>
        <div className="sliderContainer">
          <div className="sliders">
            <label htmlFor="sepia">Sepia</label>
            <span>{Math.floor(sepia / 2)}</span>
          </div>

          <input
            type="range"
            min="0"
            max="200"
            disabled={imageUp}
            id="sepia"
            value={sepia}
            onChange={(e) => {
              setsepia(e.target.value);
            }}
            className="w-full"
          />
        </div>
        {/* </div> */}
      </div>
      <p className="title">Rotate and Flip</p>

      <div className="additionalControl ">
        <button
          className="text-black bg-slate-400 text-xl rounded-sm  hover:text-2xl"
            disabled={imageUp}
            onClick={() => setrotate(rotate - 90)}
        >
          <BiRotateLeft />
        </button>
        <button className="" onClick={() => setrotate(rotate + 90)} 
            disabled={imageUp}
            >
          <BiRotateRight />
        </button>
        <button className="" onClick={() => setflipV(!flipV)}
            disabled={imageUp}
            >
          <TbFlipHorizontal />
        </button>
        <button className="" onClick={() => setflipH(!flipH)}
            disabled={imageUp}
            >
          <TbFlipVertical />
        </button>
      <button className="" onClick={() => setTozero()}>
        {" "}
        Reset
      </button>
      </div>
    </div>
  );
};

export default Screen;
