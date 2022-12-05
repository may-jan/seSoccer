import React from "react";
import Progressbar from "./Progressbar";
import './styles/MatchPrediction.css';

const MatchPrediction = () => {
  return (
    <div className="MatchPrediction">
        <div className="MatchPrediction_title">1차 승부예측<br/>가장 적중률 높은 팀</div>
        <Progressbar/>    
        <div className="country_wrap">
            <img className="country1"
                 src='https://sports-phinf.pstatic.net/team/qatar2022/default/6355.png'
                 alt='country'
            />
            <img className="country2"
                 src='https://sports-phinf.pstatic.net/team/qatar2022/default/4748.png'
                 alt='country'
            />
        </div>
    </div>
  )
};

export default MatchPrediction;
