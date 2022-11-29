import React, { useState } from 'react'
import { MatchContainer, HeaderBox, ButtonBox, MatchButton } from './style'

const MatchBox = ({ data }) => {
  const [matchStatus, setMatchStatus] = useState('경기예정')
  const [guessStatus, setGuessStatus] = useState('예측 진행중')
  return (
    <MatchContainer>
      <ul>
        <li>
          <HeaderBox>
            <div>
              <span>{data.date}</span> <span>{data.time} </span>
              <span> {matchStatus}</span>
            </div>
            <div>
              <span>{guessStatus}</span>
            </div>
          </HeaderBox>
          <ButtonBox>
            <MatchButton variant="outlined">
              <span>
                <span>
                  <img
                    src={data.homeTeamImg}
                    alt="Img"
                    width="35"
                    height="35"
                  />
                </span>
                <span>{data.homeTeam}</span>
              </span>
            </MatchButton>
            <MatchButton variant="outlined">무승부</MatchButton>
            <MatchButton variant="outlined">
              <span>
                <span>
                  <img
                    src={data.awayTeamImg}
                    alt="Img"
                    width="35"
                    height="35"
                  />
                </span>
                <span>{data.awayTeam}</span>
              </span>
            </MatchButton>
          </ButtonBox>
          <div></div>
        </li>
      </ul>
    </MatchContainer>
  )
}

export default MatchBox
