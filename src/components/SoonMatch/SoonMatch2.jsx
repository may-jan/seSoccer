import React from "react";
import './styles/SoonMatch2.css';

const SoonMatch2 = (props) => {
  const idList = props.idList;

  return(
    <div className="SoonMatch2">
      <div className="SoonMatch2_title">◆ <span>1차 승부예측 참가상</span> ◆ </div>
      <div className="SoonMatch2_result">
        <div className="ID_list">
          <ul className="ID_list_wrap">
          {
            idList.map((list) => (
              <li className="id" key={list.id}> {list.id}</li>
            ))
          }
          </ul>
        </div>
        <div className="notice">
          추첨되신 분들께는 네이버페이 포인트 1만원이 지급됩니다. 포인트 지급은 참여하신 네이버페이 ID로 결과 발표일로부터 5일 내 이뤄집니다.
        </div>

      </div>
    </div>
  );
};

export default SoonMatch2;
