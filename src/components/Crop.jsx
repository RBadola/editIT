import Cropper from "react-easy-crop";
import React from "react";
import "./Crop.css";
import { generateDownload } from "./utils/cropImage";
import { useEffect,useRef } from "react";

export default function Crop() {
  const inputRef = React.useRef();
  const ref = useRef(null)
  const aspects = [
    {
      name: "16/9",
      value: 16 / 9,
    },
    {
      name: "21/9",
      value: 21 / 9,
    },
    {
      name: "4/3",
      value: 4 / 3,
    },
    {
      name: "Reset",
      value: 1,
    },
  ];
  const [aspect, setaspect] = React.useState(1);
  const [image, setImage] = React.useState(null);
  const [croppedArea, setCroppedArea] = React.useState(null);
  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);
  
  const triggerFileSelectPopup = () => {
    inputRef.current.click();    
  };
  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onSelectFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        setImage(reader.result);
      });
      ref.current.style.display = 'none';

    }
  };

  useEffect(() => {
    setaspect(Number(aspect));
  }, [aspect]);

  const onDownload = () => {
    generateDownload(image, croppedArea);
  };

  return (
    <div className="container-cropper ">
      <div className="cropper ">
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          aspect={aspect}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
        />
        <button
          className="upBtn"
          onClick={triggerFileSelectPopup}
          ref={ref}
        >
          Choose a Image to crop
        </button>
      </div>
      <div className="settings">
        <div className="zoom">
          <div className="just">
            <span>Zoom</span>
            <span className="num">{Math.round(zoom)}</span>
          </div>
          <div>
            <input
              type="range"
              min={1}
              max={3}
              step={0.1}
              value={zoom}
              onChange={(e) => setZoom(e.target.value)}
            />
          </div>
        </div>
        <div className="aspect">
          <span className="">Aspect-Ratio</span>
          <div>
            {aspects.map((but) => {
              return (
                <button
                  className="btn"
                  onClick={() => setaspect(but.value)}
                  key={but.name}
                >
                  {but.name}
                </button>
              );
            })}
          </div>
        </div>
        <div className="container-buttons">
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={onSelectFile}
            style={{ display: "none" }}
          />

          <button className="downBtn" onClick={onDownload}>
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
