import React from "react";
import { PreMatchItems, PreMatchCountry } from "./style";
import "./style.css";

const PreMatchItem = ({ matchData }) => {
  return (
    <PreMatchItems>
      <PreMatchCountry>
        <img src={matchData.homeTeamImg} alt={matchData.homeTeam} />
        <div className="country">{matchData.homeTeam}</div>
      </PreMatchCountry>
      <div className="match-info">
        <div className="score">{matchData.homeTeamScore}</div>
        <div className="date">
          <div className="date-current">
            {matchData.isMatched ? "경기종료" : "경기전"}
          </div>
          <div className="date-time">
            {matchData.date}
            <br />
            {matchData.time}
          </div>
        </div>
        <div className="score">{matchData.awayTeamScore}</div>
      </div>
      <PreMatchCountry>
        <img src={matchData.awayTeamImg} alt={matchData.awayTeam} />
        <div className="country">{matchData.awayTeam}</div>
      </PreMatchCountry>
    </PreMatchItems>
  );
};

export default PreMatchItem;
