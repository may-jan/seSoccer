import styled from "styled-components";
import { Grid } from "@mui/material";

export const SectionContainer = styled.div`
  /* height: 65vh; */
  width: calc(100vw - 150px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1024px) {
    width: calc(100vw);
  }
`;

export const SectionGrid = styled(Grid)((props) => ({}));
