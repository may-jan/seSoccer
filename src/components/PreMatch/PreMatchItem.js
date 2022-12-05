import React from "react";
import { PreMatchItems, PreMatchCountry } from "./style";
import "./style.css";

const PreMatchItem = ({ matchData }) => {
  return (
    <PreMatchItems
      className={
        matchData.isMatched ? "prematchitem__grey" : "prematchitem__white"
      }
    >
      <PreMatchCountry>
        <img
          className="prematchitem__img"
          src={matchData.homeTeamImg}
          alt={matchData.homeTeam}
        />
        <div className="prematchitem__country">{matchData.homeTeam}</div>
      </PreMatchCountry>
      <div className="prematchitem__match_info">
        <div className="prematchitem__score">{matchData.homeTeamScore}</div>
        <div className="prematchitem__date">
          <div className="prematchitem__date_current">
            {matchData.isMatched ? "경기종료" : "경기전"}
          </div>
          <div className="prematchitem__date_time">
            {matchData.date}
            <br />
            {matchData.time}
          </div>
        </div>
        <div className="prematchitem__score">{matchData.awayTeamScore}</div>
      </div>
      <PreMatchCountry>
        <img
          className="prematchitem__img"
          src={matchData.awayTeamImg}
          alt={matchData.awayTeam}
        />
        <div className="prematchitem__country">{matchData.awayTeam}</div>
      </PreMatchCountry>
    </PreMatchItems>
  );
};

export default PreMatchItem;
