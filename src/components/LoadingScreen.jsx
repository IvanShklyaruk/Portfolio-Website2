import { useProgress } from "@react-three/drei";
import { useState, useEffect } from "react";
import { config } from "../config";

export const LoadingScreen = ({ onLoadingComplete }) => {
  const { progress } = useProgress();
  const [isPromptVisible, setIsPromptVisible] = useState(true);
  const [isLoadingVisible, setIsLoadingVisible] = useState(true);

  useEffect(() => {
    if (progress === 100 && !isPromptVisible) {
      setIsLoadingVisible(false);
      onLoadingComplete();
    }
  }, [progress, isPromptVisible, onLoadingComplete]);

  const handleOkClick = () => {
    setIsPromptVisible(false);
    if (progress === 100) {
      setIsLoadingVisible(false);
      onLoadingComplete();
    }
  };

  return (
    <div
      className={`loading-screen ${
        isLoadingVisible ? "" : "loading-screen--hidden"
      }`}
    >
      <div className="loading-screen__container">
        <h1 className="loading-screen__title">{config.title}</h1>
        <div className="progress__container">
          <div
            className="progress__bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        {isPromptVisible && (
          <div className="prompt">
            <p className="prompt__message">
              If you experience lag, please consider using an alternative
              browser to Chrome!
            </p>
            <button className="prompt__close" onClick={handleOkClick}>
              OK
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
