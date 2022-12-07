import SoonMatch1 from "./SoonMatch1";
import SoonMatch2 from "./SoonMatch2";
import { SoonMatchContainer } from "./style";

function App() {
  const idList = [
    {
      id: "aaa",
    },
    {
      id: "bbb",
    },
    {
      id: "ccc",
    },
    {
      id: "ddd",
    },
    {
      id: "eee",
    },
    {
      id: "fff",
    },
    {
      id: "ggg",
    },
    {
      id: "hhh",
    },
    {
      id: "iii",
    },
  ];

  return (
    <SoonMatchContainer>
      <SoonMatch1 />
      <SoonMatch2 idList={idList} />
    </SoonMatchContainer>
  );
}

export default App;
