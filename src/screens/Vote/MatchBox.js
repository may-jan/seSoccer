import React, { useState } from "react";
import { MatchContainer, HeaderBox, ButtonBox, MatchButton } from "./style";

const MatchBox = ({ data }) => {
  const [matchStatus, setMatchStatus] = useState("경기예정");
  const [guessStatus, setGuessStatus] = useState("예측 진행중");
  const [copiedData, setCopiedData] = useState({});
  const [isSelcetedData, setIsSelectedData] = useState({
    home: false,
    away: false,
    draw: false,
  });

  console.log(isSelcetedData);

  const homeActiveStyle = {
    color: isSelcetedData.home ? "red" : "white",
  };

  const drawActiveStyle = {
    color: isSelcetedData.draw ? "red" : "white",
  };

  const awayActiveStyle = {
    color: isSelcetedData.away ? "red" : "white",
  };

  const homeUpdateData = () => {
    setCopiedData({ ...data });
    setIsSelectedData({ home: true, away: false, draw: false });

    let response = fetch(`http://localhost:5050/api/rounds/${data.id}`, {
      method: "PATCH", // HTTP 통신방식 : GET, POST, PUT, DELETE
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        homeTeamVote: copiedData.homeTeamVote + 1,
        drawVote: copiedData.drawVote,
        awayTeamVote: copiedData.awayTeamVote,
      }),
    });
  };

  console.log(copiedData);

  const awayUpdateData = () => {
    setCopiedData({ ...data });
    setIsSelectedData({ home: false, away: true, draw: false });

    console.log("update");
    let response = fetch(`http://localhost:5050/api/rounds/${data.id}`, {
      method: "PATCH", // HTTP 통신방식 : GET, POST, PUT, DELETE
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        homeTeamVote: copiedData.homeTeamVote,
        drawVote: copiedData.drawVote,
        awayTeamVote: copiedData.awayTeamVote + 1,
      }),
    });
  };

  const drawUpdateData = () => {
    setCopiedData({ ...data });
    setIsSelectedData({ home: false, away: false, draw: true });

    console.log("update");
    let response = fetch(`http://localhost:5050/api/rounds/${data.id}`, {
      method: "PATCH", // HTTP 통신방식 : GET, POST, PUT, DELETE
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        homeTeamVote: copiedData.homeTeamVote,
        drawVote: copiedData.drawVote + 1,
        awayTeamVote: copiedData.awayTeamVote,
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
            <MatchButton
              style={homeActiveStyle}
              variant="outlined"
              onClick={homeUpdateData}
            >
              <span>
                <span>
                  <img src={data.homeTeamImg} width="35" height="35" alt="" />
                </span>
                <span>{data.homeTeam}</span>
              </span>
            </MatchButton>
            <MatchButton
              style={drawActiveStyle}
              variant="outlined"
              onClick={drawUpdateData}
            >
              무승부
            </MatchButton>
            <MatchButton
              style={awayActiveStyle}
              variant="outlined"
              onClick={awayUpdateData}
            >
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
