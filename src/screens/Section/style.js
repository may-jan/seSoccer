import styled from 'styled-components'
import { Grid } from '@mui/material'

export const SectionContainer = styled.div`
  /* height: 65vh; */
  width: calc(100vw - 220px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;

  @media (max-width: 1024px) {
    width: 100vw;
  }
`

export const SectionGrid = styled(Grid)(props => ({}))
