import styled from "styled-components";
import { COLORS, FontSize } from "../../constants/index";
<link
  href="https://fonts.googleapis.com/css2?family=Hahmlet&display=swap"
  rel="stylesheet"
></link>;

export const PreMatchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 25vh;
  box-sizing: border-box;
  padding: 20px;
  width: inherit;
  font-size: ${FontSize.regular};
  overflow: auto;

  @media (max-width: 1024px) {
    width: 100vw;
  }
`;

export const PreMatchItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  height: 80%;
  background-color: ${COLORS.white};
  border-radius: 20px;
  margin-right: 20px;
  box-sizing: border-box;
  padding: 5px;
`;

export const PreMatchCountry = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  font-family: "Hahmlet", serif;
`;
