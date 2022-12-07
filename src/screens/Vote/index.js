import React, { useState, useEffect } from "react";
import MatchBox from "./MatchBox";
import { VoteContainer, RoundButtonContainer, RoundButton } from "./style";

const Vote = () => {
  const [matches, setMatches] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [rounds, setRounds] = useState([
    { title: "16강" },
    { title: "8강" },
    { title: "4강" },
    { title: "3-4위전" },
    { title: "결승" },
  ]);

  const [checkRound, setCheckRound] = useState("16강");

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
  }

  useEffect(() => {
    getData();
  }, []);

  // console.log(matches)

  const changeRound = (e) => {
    setCheckRound(e.target.value);
    filterMatches(e.target.value);
  };
  console.log(filteredData);

  return (
    <VoteContainer>
      <RoundButtonContainer direction="row" spacing={2}>
        {rounds.map((round, idx) => (
          <RoundButton
            key={idx}
            variant="outlined"
            value={round.title}
            onClick={(e) => changeRound(e)}
          >
            {round.title}
          </RoundButton>
        ))}
      </RoundButtonContainer>
      {filteredData.map((match) => (
        <MatchBox key={match.id} data={match} />
      ))}
    </VoteContainer>
  );
};

export default Vote;
