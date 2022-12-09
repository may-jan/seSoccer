import React, { useState, useEffect } from "react";
import MatchBox from "./MatchBox";
import { VoteContainer, RoundButtonContainer } from "./style";

import "./style.scss";

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

  const changeRoundsHandler = (e) => {
    setIsSelectedRounds(e.target.value);
  };

  // Read (조회)
  const getData = () => {
    fetch(`http://localhost:5050/api/rounds`)
      .then((res) => res.json())
      .then((data) => setMatches(data.rounds));
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
    filterMatches(e.target.value);
  };

  return (
    <VoteContainer>
      <RoundButtonContainer direction="row" spacing={2}>
        {rounds.map((round, idx) => (
          <button
            key={idx}
            variant="outlined"
            value={round.title}
            onClick={(e) => {
              changeRound(e);
              changeRoundsHandler(e);
            }}
            className={
              isSelcetedRounds === round.title
                ? "roundButton active"
                : "roundButton"
            }
          >
            {round.title}
          </button>
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
