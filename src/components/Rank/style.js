import styled from "styled-components";

export const RankContainer = styled.div`
  height: 65vh;

  @media (max-width: 1200px) {
    height: 32vh;
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
