import React from "react";
import "./styles/SoonMatch2.css";

const SoonMatch2 = (props) => {
  const idList = props.idList;

  return (
    <div className="SoonMatch2">
      <div className="SoonMatch2_title">
        ◆ <span>1차 승부예측 참가상</span> ◆{" "}
      </div>
      <div className="SoonMatch2_result">
        <div className="ID_list">
          <ul className="ID_list_wrap">
            {idList.map((list) => (
              <li className="id" key={list.id}>
                {" "}
                {list.id}
              </li>
            ))}
          </ul>
        </div>
        <div className="notice">추첨되신 분들께는 포인트가 지급됩니다.</div>
      </div>
    </div>
  );
};

export default SoonMatch2;
