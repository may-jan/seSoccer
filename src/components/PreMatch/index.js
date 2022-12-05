import React, { useState, useEffect } from "react";
import PreMatchItem from "./PreMatchItem";
import { PreMatchContainer } from "./style";
import { uid } from "../../utils/randomId";
import { checkDate } from "../../utils/checkDate";

const dummyData = [
  {
    id: 1,
    date: "12월 04일",
    time: "00:00",
    homeTeam: "네덜란드",
    homeTeamScore: 0,
    awayTeam: "웨일스",
    awayTeamScore: 0,
    win: 0,
    draw: 0,
    lose: 0,
    homeTeamVote: 100,
    awayTeamVote: 200,
    drawVote: 250,
    homeTeamImg:
      "https://github.com/djshinnn/qatar-worldcup-clone/blob/main/images/countries/netherlands.png?raw=true",
    awayTeamImg:
      "https://github.com/djshinnn/qatar-worldcup-clone/blob/main/images/countries/wales.png?raw=true",
  },
  {
    id: 2,
    date: "12월 04일",
    time: "04:00",
    homeTeam: "잉글랜드",
    homeTeamScore: 0,
    awayTeam: "세네갈",
    awayTeamScore: 0,
    win: 0,
    draw: 0,
    lose: 0,
    homeTeamVote: 0,
    awayTeamVote: 0,
    drawVote: 0,
    homeTeamImg:
      "https://github.com/djshinnn/qatar-worldcup-clone/blob/main/images/countries/england.png?raw=true",
    awayTeamImg:
      "https://github.com/djshinnn/qatar-worldcup-clone/blob/main/images/countries/senegal.png?raw=true",
  },
  {
    id: 3,
    date: "12월 05일",
    time: "00:00",
    homeTeam: "아르헨티나",
    homeTeamScore: 0,
    awayTeam: "덴마크",
    awayTeamScore: 0,
    win: 0,
    draw: 0,
    lose: 0,
    homeTeamVote: 0,
    awayTeamVote: 0,
    drawVote: 0,
    homeTeamImg:
      "https://github.com/djshinnn/qatar-worldcup-clone/blob/main/images/countries/argentina.png?raw=true",
    awayTeamImg:
      "https://github.com/djshinnn/qatar-worldcup-clone/blob/main/images/countries/denmark.png?raw=true",
  },
  {
    id: 4,
    date: "12월 05일",
    time: "04:00",
    homeTeam: "프랑스",
    homeTeamScore: 0,
    awayTeam: "멕시코",
    awayTeamScore: 0,
    win: 0,
    draw: 0,
    lose: 0,
    homeTeamVote: 0,
    awayTeamVote: 0,
    drawVote: 0,
    homeTeamImg:
      "https://github.com/djshinnn/qatar-worldcup-clone/blob/main/images/countries/france.png?raw=true",
    awayTeamImg:
      "https://github.com/djshinnn/qatar-worldcup-clone/blob/main/images/countries/mexico.png?raw=true",
  },
  {
    id: 5,
    date: "12월 06일",
    time: "00:00",
    homeTeam: "스페인",
    homeTeamScore: 0,
    awayTeam: "모로코",
    awayTeamScore: 0,
    win: 0,
    draw: 0,
    lose: 0,
    homeTeamVote: 0,
    awayTeamVote: 0,
    drawVote: 0,
    homeTeamImg:
      "https://github.com/djshinnn/qatar-worldcup-clone/blob/main/images/countries/spain.png?raw=true",
    awayTeamImg:
      "https://github.com/djshinnn/qatar-worldcup-clone/blob/main/images/countries/moroco.png?raw=true",
  },
  {
    id: 6,
    date: "12월 06일",
    time: "04:00",
    homeTeam: "벨기에",
    homeTeamScore: 0,
    awayTeam: "독일",
    awayTeamScore: 0,
    win: 0,
    draw: 0,
    lose: 0,
    homeTeamVote: 0,
    awayTeamVote: 0,
    drawVote: 0,
    homeTeamImg:
      "https://github.com/djshinnn/qatar-worldcup-clone/blob/main/images/countries/belgium.png?raw=true",
    awayTeamImg:
      "https://github.com/djshinnn/qatar-worldcup-clone/blob/main/images/countries/germany.png?raw=true",
  },
];

const PreMatch = () => {
  const [matchData, setMatchData] = useState(dummyData);

  // 기존의 데이터를 가져와 matchData에 담는다.
  const getData = async () => {
    let response = await fetch(`http://localhost:5051/all`);
    let data = await response.json();
    return setMatchData(data);
  };

  // 기존의 데이터에는 경기전, 경기완료 데이터가 없기 때문에
  //시간비교 함수를 사용하여 기존 데이터에 붙여준 후,
  //setMatchData로 데이터를 변경해준다.
  const addIsMatchedData = matchData.map((item) => ({
    ...item,
    isMatched: checkDate(item),
  }));

  // 경기완료가 된 경기들은 맨 뒤로 붙이기 위해 배열을 다시 정리한다
  const EndMatchBack = addIsMatchedData.filter(
    (item) => item.isMatched === true
  );
  const StartMatchFront = addIsMatchedData.filter(
    (item) => item.isMatched === false
  );
  const finalData = [...StartMatchFront, ...EndMatchBack];

  useEffect(() => {
    // getData();
    setMatchData(finalData);
  }, []);

  return (
    <PreMatchContainer>
      {matchData.map((match) => (
        <PreMatchItem key={uid()} matchData={match} />
      ))}
    </PreMatchContainer>
  );
};

export default PreMatch;
