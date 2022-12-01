import React, { useState, useEffect } from "react";
import PreMatchItem from "./PreMatchItem";
import { PreMatchContainer } from "./style";
import { matchList } from "../../common/dummy";

const PreMatch = () => {
  // 기존의 데이터를 가져와 matchData에 담는다.
  const [matchData, setMatchData] = useState(matchList);

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
    checkDate();
    setMatchData(finalData);
  }, []);

  // 아직 경기를 하지 않았다는 상태(경기전)를 false로 지정
  function checkDate(obj) {
    let toDay = new Date();
    if (obj) {
      const matchDayYear = 2022;
      const matchDayMonth = parseInt(obj.date.split("월")[0]) - 1;
      const matchDayDay = parseInt(obj.date.split("월")[1].split("일"));
      const matchTime = parseInt(obj.time.split(":")[0]);
      const matchMinute = parseInt(obj.time.split(":")[1]);

      let matchDay = new Date(
        matchDayYear,
        matchDayMonth,
        matchDayDay,
        matchTime,
        matchMinute
      );

      // 경기날짜가 오늘날짜보다 이르다면 경기를 이미 했으니 inMatch를 true로 바꿔준다
      if (matchDay < toDay) {
        return true;
      } else {
        return false;
      }
    }
  }

  return (
    <PreMatchContainer>
      {matchData.map((match) => (
        <PreMatchItem
          key={match.id}
          matchData={match}
          className={
            match.isMatched ? "prematchitem__white" : "prematchitem__gray"
          }
        />
      ))}
    </PreMatchContainer>
  );
};

export default PreMatch;
