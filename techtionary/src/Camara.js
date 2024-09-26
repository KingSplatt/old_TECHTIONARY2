import React, { useCallback, useRef, } from "react";
import Webcam from "react-webcam";

const Camara = () => {
    const webcamRef = useRef(null);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        console.log(imageSrc);
    }, [webcamRef]);
    return (
        <div>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={400}
                height={400}
                videoConstraints={{ facingMode: "user" }}
            />
            <button onClick={capture}>Capturar</button>
        </div>
    );
}

export default Camara;