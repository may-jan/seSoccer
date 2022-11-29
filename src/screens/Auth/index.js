import React, { useState } from "react";

import Modal from "../../common/UIElements/Modal";
import { Box, Button, Typography } from "@mui/material";

import { LoginBox, SubmitButton, SubmitButtonBox } from "./style";
import useAuth from "../../context/auth-context";
import { useForm } from "../../hooks/form-hook";
import Input from "../../common/FormElements/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../utils/validators";
import { COLORS } from "../../constants";
import { LoginModeText } from "../../common/style";

const Auth = ({ state }) => {
  const { login } = useAuth();
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          nickName: undefined,
          checkPassword: {
            value: "",
            isValid: false,
          },
        },
        formState.inputs.nickName.isValid &&
          formState.inputs.email.isValid &&
          formState.inputs.password.isValid &&
          formState.inputs.checkPassword.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
        },
        false
      );
    }

    setIsLoginMode((prevMode) => !prevMode);
    console.log(isLoginMode);
  };

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
    login();
  };

  return (
    <Modal state={state} setIsLoginMode={setIsLoginMode}>
      <Box textAlign="center">
        <Box>
          <Typography variant="h5" component="h2">
            <LoginModeText>{!isLoginMode ? "SignUp" : "LogIn"}</LoginModeText>
            Your Account
          </Typography>
        </Box>

        <Box>
          {!isLoginMode && (
            <LoginBox>
              <Input
                element="input"
                id="nickName"
                placeholder="Nick Name"
                type="text"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="닉네임을 입력해주세요."
                onInput={inputHandler}
              />
            </LoginBox>
          )}
          <LoginBox>
            <Input
              element="input"
              id="email"
              placeholder="Email Address"
              type="text"
              validators={[VALIDATOR_EMAIL()]}
              errorText="올바른 형식의 이메일을 작성해주세요."
              onInput={inputHandler}
            />
          </LoginBox>
          <LoginBox>
            <Input
              element="password"
              id="password"
              placeholder="Password"
              type="password"
              validators={[VALIDATOR_MINLENGTH(8)]}
              errorText="8자 이상의 비밀번호를 입력해주세요."
              onInput={inputHandler}
            />
          </LoginBox>
          {!isLoginMode && (
            <LoginBox>
              <Input
                element="password"
                id="checkPassword"
                placeholder="Check Password"
                type="password"
                validators={[VALIDATOR_MINLENGTH(8)]}
                errorText="8자 이상의 비밀번호를 입력해주세요."
                onInput={inputHandler}
              />
            </LoginBox>
          )}
        </Box>

        {isLoginMode && (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginTop="15px"
          >
            <Box display="flex" alignItems="center">
              <input type="checkbox" /> <Typography>Remember</Typography>
            </Box>
            <Typography>Forget Password?</Typography>
          </Box>
        )}

        <SubmitButtonBox>
          <SubmitButton onClick={authSubmitHandler}>
            {!isLoginMode ? "SignUp" : "LogIn"}
          </SubmitButton>
        </SubmitButtonBox>

        <Box marginTop="15px">
          <Button onClick={switchModeHandler}>
            <Typography sx={{ color: COLORS.black }}>
              {!isLoginMode ? "LOGIN" : "Create Account"}
            </Typography>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default Auth;
