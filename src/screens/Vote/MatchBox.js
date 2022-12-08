import React, { useState } from 'react'
import {
  MatchContainer,
  HeaderBox,
  ButtonBox,
  MatchButton,
  MatchButtonBox,
  MatchImageBox,
} from './style'
import { COLORS } from '../../constants'
import { checkDate } from '../../utils/checkDate'

const MatchBox = ({ data }) => {
  const [copiedData, setCopiedData] = useState({})
  const [isSelcetedData, setIsSelectedData] = useState({
    home: false,
    away: false,
    draw: false,
  })

  console.log(checkDate(data))

  const homeActiveStyle = {
    backgroundColor: isSelcetedData.home ? COLORS.darkRed : '#e2e2e2',
    color: isSelcetedData.home ? COLORS.white : COLORS.selectedBlack,
    opacity: !isSelcetedData.home && 0.65,
    display: 'flex',
    justifyContent: 'flex-end',
    border: 'none',
    borderRadius: '8px 0 0 8px',
  }

  const drawActiveStyle = {
    backgroundColor: isSelcetedData.draw ? COLORS.darkRed : '#e2e2e2',
    color: isSelcetedData.draw ? COLORS.white : COLORS.selectedBlack,
    opacity: !isSelcetedData.draw && 0.65,
    border: 'none',
    borderRadius: 0,
  }

  const awayActiveStyle = {
    backgroundColor: isSelcetedData.away ? COLORS.darkRed : '#e2e2e2',
    color: isSelcetedData.away ? COLORS.white : COLORS.selectedBlack,
    opacity: !isSelcetedData.away && 0.65,
    display: 'flex',
    justifyContent: 'flex-start',
    border: 'none',
    borderRadius: '0 8px 8px 0',
  }

  const homeUpdateData = () => {
    setCopiedData({ ...data })
    setIsSelectedData({ home: true, away: false, draw: false })

    let response = fetch(`http://localhost:5050/api/rounds/${data.id}`, {
      method: 'PATCH', // HTTP 통신방식 : GET, POST, PUT, DELETE
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        homeTeamVote: copiedData.homeTeamVote + 1,
        drawVote: copiedData.drawVote,
        awayTeamVote: copiedData.awayTeamVote,
      }),
    })
  }

  const awayUpdateData = () => {
    setCopiedData({ ...data })
    setIsSelectedData({ home: false, away: true, draw: false })

    let response = fetch(`http://localhost:5050/api/rounds/${data.id}`, {
      method: 'PATCH', // HTTP 통신방식 : GET, POST, PUT, DELETE
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        homeTeamVote: copiedData.homeTeamVote,
        drawVote: copiedData.drawVote,
        awayTeamVote: copiedData.awayTeamVote + 1,
      }),
    })
  }

  const drawUpdateData = () => {
    setCopiedData({ ...data })
    setIsSelectedData({ home: false, away: false, draw: true })

    let response = fetch(`http://localhost:5050/api/rounds/${data.id}`, {
      method: 'PATCH', // HTTP 통신방식 : GET, POST, PUT, DELETE
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        homeTeamVote: copiedData.homeTeamVote,
        drawVote: copiedData.drawVote + 1,
        awayTeamVote: copiedData.awayTeamVote,
      }),
    })
  }

  return (
    <MatchContainer maxWidth="md">
      <ul>
        <li>
          <HeaderBox>
            <div>
              {checkDate(data) ? (
                <div className="roundResult" style={{ color: '#555555' }}>
                  {data.homeTeam}
                  <span style={{ color: '#cc1d5c' }}>
                    {' '}
                    {data.homeTeamScore}{' '}
                  </span>
                  :
                  <span style={{ color: '#cc1d5c' }}>
                    {' '}
                    {data.awayTeamScore}{' '}
                  </span>
                  {data.awayTeam}
                </div>
              ) : (
                <div className="roundResult">
                  <span>{data.date}</span> <span>{data.time} </span>
                  <span>경기 예정</span>
                </div>
              )}
            </div>
            <div style={{ paddingRight: '1.5rem' }}>
              <span> {checkDate(data) ? '예측 종료' : '예측 진행중'}</span>
            </div>
          </HeaderBox>
          <ButtonBox>
            <MatchButton
              style={homeActiveStyle}
              variant="outlined"
              onClick={homeUpdateData}
              sx={{ fontSize: '1.4rem' }}
            >
              <MatchButtonBox>
                <span>{data.homeTeam}</span>
                <MatchImageBox
                  style={{
                    marginLeft: '5px',
                  }}
                >
                  <img src={data.homeTeamImg} width="35" height="35" alt="" />
                </MatchImageBox>
              </MatchButtonBox>
            </MatchButton>
            <MatchButton
              style={drawActiveStyle}
              variant="outlined"
              onClick={drawUpdateData}
              sx={{ fontSize: '1.4rem' }}
            >
              승부차기
            </MatchButton>
            <MatchButton
              style={awayActiveStyle}
              variant="outlined"
              onClick={awayUpdateData}
              sx={{ fontSize: '1.4rem' }}
            >
              <MatchImageBox
                style={{
                  marginRight: '5px',
                }}
              >
                <img src={data.awayTeamImg} alt="Img" width="35" height="35" />
              </MatchImageBox>
              <span>{data.awayTeam}</span>
            </MatchButton>
          </ButtonBox>
          <div></div>
        </li>
      </ul>
    </MatchContainer>
  )
}

export default MatchBox
