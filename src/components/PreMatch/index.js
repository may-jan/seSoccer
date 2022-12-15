import React, { useState, useEffect } from "react";
import PreMatchItem from "./PreMatchItem";
import { PreMatchContainer } from "./style";
import { uid } from "../../utils/randomId";
import { checkDate } from "../../utils/checkDate";
import { dummyData } from "./dummy";

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
