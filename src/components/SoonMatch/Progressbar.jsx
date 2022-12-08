import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ChangingProgressProvider from "./ChangingProgressProvider";
import "react-circular-progressbar/dist/styles.css";
import "./styles/Progressbar.css";

const Progressbar = () => {
  return (
    <div className="Progressbar">
      <ChangingProgressProvider values={[0, 80]}>
        {(value) => (
          <CircularProgressbar
            value={value}
            text={`${value}%`}
            circleRatio={0.65}
            styles={buildStyles({
              rotation: 1 / 2 + 1 / 6,
              trailColor: "#eee",
              pathColor: "#8d1b3d",
              textColor: "#8d1b3d",
            })}
          />
        )}
      </ChangingProgressProvider>
    </div>
  );
};

export default Progressbar;
