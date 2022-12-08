import React, { useState, useEffect } from "react";
import { COLORS } from "../../constants";
import MatchBox from "./MatchBox";
import { VoteContainer, RoundButtonContainer, RoundButton } from "./style";

import "./style.css";

const Vote = () => {
  const [matches, setMatches] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isFilteredData, setIsFilteredData] = useState(false);
  const [isSelcetedRounds, setIsSelectedRounds] = useState();
  const [rounds, setRounds] = useState([
    { title: "16강" },
    { title: "8강" },
    { title: "4강" },
    { title: "3-4위전" },
    { title: "결승" },
  ]);

  const [checkRound, setCheckRound] = useState("16강");

  const changeRoundsHandler = (e) => {
    setIsSelectedRounds(e.target.value);
  };

  const selectedStyle = {
    backgroundColor: COLORS.darkRed,
  };

  console.log(isSelcetedRounds);

  // Read (조회)
  const getData = () => {
    let response = fetch(`http://localhost:5050/api/rounds`)
      .then((res) => res.json())
      .then((data) => setMatches(data.rounds));
  };

  // Update (수정)
  const updateData = (roundId, item) => {
    let response = fetch(`http://localhost:5050/api/rounds/${roundId}`, {
      method: "PATCH", // HTTP 통신방식 : GET, POST, PUT, DELETE
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...item,
      }),
    });
  };

  function filterMatches(round) {
    let filtered = matches.filter((match) => match.round === round);
    setFilteredData(filtered);
    setIsFilteredData(true);
  }

  useEffect(() => {
    getData();
  }, []);

  const changeRound = (e) => {
    setCheckRound(e.target.value);
    filterMatches(e.target.value);
  };

  return (
    <VoteContainer>
      <RoundButtonContainer direction="row" spacing={2}>
        {rounds.map((round, idx) => (
          <RoundButton
            key={idx}
            variant="outlined"
            value={round.title}
            onClick={(e) => {
              changeRound(e);
              changeRoundsHandler(e);
            }}
            className={isSelcetedRounds === round.title && "active"}
          >
            {round.title}
          </RoundButton>
        ))}
      </RoundButtonContainer>
      {isFilteredData ? (
        <React.Fragment>
          {filteredData.map((match) => (
            <MatchBox key={match.id} data={match} />
          ))}
        </React.Fragment>
      ) : (
        <React.Fragment>
          {matches.map((match) => (
            <MatchBox key={match.id} data={match} />
          ))}
        </React.Fragment>
      )}
    </VoteContainer>
  );
};

export default Vote;
