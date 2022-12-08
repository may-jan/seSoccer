import styled from "styled-components";

export const RankContainer = styled.div`
  height: 65vh;
  padding-right: 40px;
  font-family: "Nanum Gothic", sans-serif;

  @media (max-width: 1024px) {
    padding: 0 20px;
  }
`;

export const voteData = [
  {
    id: 1,
    homeTeam: "",
    awayTeam: "",
    group: "",
    date: "",
    time: "",
    win: "",
    draw: "",
    lose: "",
    homeTeamVote: "",
    drawVote: "",
    awayTeamVote: "",
    stadium: "",
    img: "",
  },
];
