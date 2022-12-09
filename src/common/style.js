import styled from 'styled-components'

import { COLORS } from '../constants'
import { Button } from '@mui/material'

export const GradientColor = `linear-gradient(
  90deg,
  rgba(2, 0, 36, 1) 0%,
  rgba(203, 129, 218, 1) 0%,
  rgba(146, 72, 213, 1) 0%,
  rgba(116, 109, 229, 1) 38%,
  rgba(96, 169, 254, 1) 100%,
  rgba(61, 82, 119, 1) 100%,
  rgba(0, 241, 232, 0.9542410714285714) 100%
)`

export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(113, 155, 124, 1) 100%
  );
  @media (max-width: 1024px) {
    width: calc(100vw + 220px);
  }
  @media (max-width: 800px) {
    width: calc(100vw + 40px);
  }
`

export const MainContainer = styled.div`
  flex-direction: column;
  width: calc(100vw - 220px);

  @media (max-width: 1024px) {
    width: 100vw;
  }
`

export const ModalButton = styled(Button)(() => ({
  background: GradientColor,
  // marginRight: "15px",
  // fontWeight: "bold",
  // fontSize: "12px",
  // textTransform: "none",
  // borderRadius: "8px",
}))

export const LoginModeText = styled.span`
  color: ${COLORS.purple};
  margin-right: 5px;
`

export const ErrorText = styled.p`
  margin-top: 5px;
  color: ${COLORS.red};
  font-size: 12px;
`
