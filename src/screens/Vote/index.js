import React, { useState, useEffect } from 'react'
import MatchBox from './MatchBox'
import { VoteContainer, RoundButtonContainer, RoundButton } from './style'

const Vote = () => {
  const [data16, setData16] = useState([])
  const [data8, setData8] = useState([])
  const [data4, setData4] = useState([])
  const [data3, setData3] = useState([])
  const [data2, setData2] = useState([])

  const [data, setData] = useState(false)

  const [rounds, setRounds] = useState([
    { round: 'roundOf16', title: '16강' },
    { round: 'roundOf8', title: '8강' },
    { round: 'roundOf4', title: '4강' },
    { round: 'roundOf3', title: '3-4위전' },
    { round: 'roundOf2', title: '결승' },
  ])

  const [checkRound, setCheckRound] = useState('roundOf16')

  // const updateVoteData = (
  //   route,
  //   id,
  //   homeVote = data.homeTeamVote,
  //   awayVote = data.awayTeamVote,
  //   drawVote = data.drawVote
  // ) => {
  //   getOneData(route, id) // data 수정
  //   updateData(route, {
  //     ...data,
  //     homeTeamVote: homeVote,
  //     awayTeamVote: awayVote,
  //     drawVote: drawVote,
  //   })
  // }

  // updateVoteData('RoundOf16', 1, ++data.homeTeamVote, '', '')
  // updateVoteData('RoundOf16', 1, '', ++data.awayTeamVote, '')
  // updateVoteData('RoundOf16', 1, '', '', ++data.drawVote)

  // Read (조회)
  const getData = (route, setMatchData) => {
    let response = fetch(`http://localhost:5050/${route}`)
      .then(res => res.json())
      .then(data => setMatchData(data))
  }
  // getData('RoundOf16')

  // 하나만 조회
  const getOneData = (route, id) => {
    let response = fetch(`http://localhost:5050/${route}/${id}`)
      .then(res => res.json())
      .then(data => setData(data))
  }

  // Update (수정)
  const updateData = (route, item) => {
    let response = fetch(`http://localhost:5050/${route}/${item.id}`, {
      method: 'PUT', // HTTP 통신방식 : GET, POST, PUT, DELETE
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...item,
      }),
    })
  }

  useEffect(() => {
    getOneData('RoundOf16', 1)
    getData('RoundOf16', setData16)
    getData('QuaterFinals', setData8)
    getData('semiFinal', setData4)
    getData('thirdPlace', setData3)
    getData('final', setData2)
  }, [])

  // console.log({
  //   data16,
  //   data8,
  //   data4,
  //   data3,
  //   data2,
  // })

  if (data) {
    // updateData('RoundOf16', {
    //   id: 1,
    //   ...data,
    //   homeTeamVote: 100,
    //   awayTeamVote: 200,
    //   drawVote: 250,
    // })
  }

  let roundof16 = data16.map((data, idx) => <MatchBox key={idx} data={data} />)
  let roundof8 = data8.map((data, idx) => <MatchBox key={idx} data={data} />)
  let roundof4 = data4.map((data, idx) => <MatchBox key={idx} data={data} />)
  let roundof3 = data3.map((data, idx) => <MatchBox key={idx} data={data} />)
  let roundof2 = data2.map((data, idx) => <MatchBox key={idx} data={data} />)

  const changeRound = e => {
    setCheckRound(e.target.value)
  }

  return (
    <VoteContainer>
      <RoundButtonContainer direction="row" spacing={2}>
        {rounds.map((round, idx) => (
          <RoundButton
            key={idx}
            variant="outlined"
            value={round.round}
            onClick={changeRound}
          >
            {round.title}
          </RoundButton>
        ))}
      </RoundButtonContainer>
      {checkRound === 'roundOf16' ? roundof16 : null}
      {checkRound === 'roundOf8' ? roundof8 : null}
      {checkRound === 'roundOf4' ? roundof4 : null}
      {checkRound === 'roundOf3' ? roundof3 : null}
      {checkRound === 'roundOf2' ? roundof2 : null}
    </VoteContainer>
  )
}

export default Vote
