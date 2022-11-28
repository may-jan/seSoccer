import React, { useState, useEffect } from "react";
import { PreMatchItems, PreMatchCountry } from "./style";
import "./style.css";

const PreMatchItem = (props) => {
  const {
    date,
    time,
    homeTeam,
    homeTeamScore,
    awayTeam,
    awayTeamScore,
    homeTeamImg,
    awayTeamImg,
    matchEnd,
  } = props;

  // 아직 경기를 하지 않았다는 상태(경기전)를 false로 지정
  const [inMatch, setInMatch] = useState(false);
  const matchFinish = () => {
    let toDay = new Date();

    const matchDayYear = 2022;
    const matchDayMonth = parseInt(date.split("월")[0]) - 1;
    const matchDayDay = parseInt(date.split("월")[1].split("일"));
    const matchTime = parseInt(time.split(":")[0]);
    const matchMinute = parseInt(time.split(":")[1]);

    let matchDay = new Date(
      matchDayYear,
      matchDayMonth,
      matchDayDay,
      matchTime,
      matchMinute
    );

    console.log(toDay, matchDay);

    // 경기날자가 오늘날자보다 이르다면 경기를 이미 했으니 inMatch를 true로 바꿔준다
    if (matchDay < toDay) {
      setInMatch(!inMatch);
    } else {
      setInMatch(inMatch);
    }
  };

  useEffect(() => {
    matchFinish();
    matchEndHandler();
  }, []);

  const matchEndHandler = (matchDay) => {
    matchEnd(matchDay);
  };

  return (
    <PreMatchItems>
      <PreMatchCountry>
        <img src={homeTeamImg} alt={homeTeam} />
        <div className="country">{homeTeam}</div>
      </PreMatchCountry>
      <div className="match-info">
        <div className="score">{homeTeamScore}</div>
        <div className="date">
          <div className="date-current">{inMatch ? "경기종료" : "경기전"}</div>
          <div className="date-time">
            {date}
            <br />
            {time}
          </div>
        </div>
        <div className="score">{awayTeamScore}</div>
      </div>
      <PreMatchCountry>
        <img src={awayTeamImg} alt={awayTeam} />
        <div className="country">{awayTeam}</div>
      </PreMatchCountry>
    </PreMatchItems>
  );
};

export default PreMatchItem;
