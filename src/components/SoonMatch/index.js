import SoonMatch1 from './SoonMatch1'
import SoonMatch2 from './SoonMatch2'
import { SoonMatchContainer } from './style'

function App() {
  const idList = [
    {
      id: '재빈',
    },
    {
      id: '수현',
    },
    {
      id: '재은',
    },
  ]

  return (
    <SoonMatchContainer>
      <SoonMatch1 />
      <SoonMatch2 idList={idList} />
    </SoonMatchContainer>
  )
}

export default App
