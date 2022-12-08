import styled from "styled-components";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";
import { COLORS } from "../../constants";

export const VoteContainer = styled.div`
  padding: 2rem;
`;

export const RoundButtonContainer = styled(Stack)`
  justify-content: center;
`;

export const RoundButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${COLORS.darkRed};
  width: 6.5rem;
  height: 6rem;
  border-radius: 8px;
  font-size: 1.5rem;
  background-color: ${COLORS.lightGrey};
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.darkRed};
    color: white;
  }
`;

export const MatchContainer = styled(Container)`
  padding: 2rem;
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonBox = styled.div`
  display: flex;
  padding: 1rem;
`;

export const MatchButton = styled(Button)`
  flex: 1;
  height: 7rem;
`;

export const MatchButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MatchImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
