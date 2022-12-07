import React, { useState } from "react";
import { MatchContainer, HeaderBox, ButtonBox, MatchButton } from "./style";

const MatchBox = ({ data }) => {
  const [matchStatus, setMatchStatus] = useState("경기예정");
  const [guessStatus, setGuessStatus] = useState("예측 진행중");

  const homeUpdateData = () => {
    console.log("update");
    let response = fetch(`http://localhost:5050/api/rounds/${data.id}`, {
      method: "PATCH", // HTTP 통신방식 : GET, POST, PUT, DELETE
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        homeTeamVote: data.homeTeamVote + 1,
        drawVote: data.drawVote,
        awayTeamVote: data.awayTeamVote,
      }),
    });
  };

  const awayUpdateData = () => {
    console.log("update");
    let response = fetch(`http://localhost:5050/api/rounds/${data.id}`, {
      method: "PATCH", // HTTP 통신방식 : GET, POST, PUT, DELETE
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        homeTeamVote: data.homeTeamVote,
        drawVote: data.drawVote,
        awayTeamVote: data.awayTeamVote + 1,
      }),
    });
  };

  const drawUpdateData = () => {
    console.log("update");
    let response = fetch(`http://localhost:5050/api/rounds/${data.id}`, {
      method: "PATCH", // HTTP 통신방식 : GET, POST, PUT, DELETE
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        homeTeamVote: data.homeTeamVote,
        drawVote: data.drawVote + 1,
        awayTeamVote: data.awayTeamVote,
      }),
    });
  };

  return (
    <MatchContainer>
      <ul>
        <li>
          <HeaderBox>
            <div>
              <span>{data.date}</span> <span>{data.time} </span>
              <span> {matchStatus}</span>
            </div>
            <div>
              <span>{guessStatus}</span>
            </div>
          </HeaderBox>
          <ButtonBox>
            <MatchButton variant="outlined" onClick={homeUpdateData}>
              <span>
                <span>
                  <img src={data.homeTeamImg} width="35" height="35" alt="" />
                </span>
                <span>{data.homeTeam}</span>
              </span>
            </MatchButton>
            <MatchButton variant="outlined" onClick={drawUpdateData}>
              무승부
            </MatchButton>
            <MatchButton variant="outlined" onClick={awayUpdateData}>
              <span>
                <span>
                  <img
                    src={data.awayTeamImg}
                    alt="Img"
                    width="35"
                    height="35"
                  />
                </span>
                <span>{data.awayTeam}</span>
              </span>
            </MatchButton>
          </ButtonBox>
          <div></div>
        </li>
      </ul>
    </MatchContainer>
  );
};

export default MatchBox;
