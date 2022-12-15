import styled from "styled-components";
import { Box } from "@mui/material";

import { COLORS } from "../../constants";
import { GradientColor } from "../../common/style";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 35px 20px 0 20px;
`;

export const LoginBox = styled(Box)`
  text-align: center;
  width: 100%;
  margin-top: 30px;
`;

export const LoginTextField = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  border-bottom: 2px solid transparent;
  border-image: ${GradientColor};
  border-image-slice: 1;
`;

export const SubmitButtonBox = styled(Box)`
  display: flex;
  align-items: center;
  background: ${GradientColor};
  height: 30px;
  margin-top: 40px;
`;

export const SubmitButton = styled.button`
  border: none;
  color: ${COLORS.white};
  width: 100%;
  background: transparent;
  font-weight: bold;
  cursor: pointer;
`;
