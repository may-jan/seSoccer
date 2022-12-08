import React, { useState } from "react";

import Modal from "../../common/UIElements/LogInModal";
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

import logo from "../../asset/images/sesoccer.png";
import LoadingSpinner from "../../common/UIElements/LoadingSpinner";
import ErrorModal from "../../common/UIElements/ErrorModal";

const Auth = ({ state }) => {
  const { login } = useAuth();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

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
  };

  const authSubmitHandler = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    if (isLoginMode) {
      try {
        const response = await fetch("http://localhost:5050/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
        });

        const responseData = await response.json();

        if (!response.ok) {
          console.log("login", responseData.message);
          throw new Error(responseData.message);
        }
        console.log("login", responseData);
        setIsLoading(false);
        login();
      } catch (err) {
        setIsLoading(false);
        setError(err.message || "알 수 없는 오류입니다. 다시 시도해주세요.");
      }
    } else {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:5050/api/users/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nickName: formState.inputs.nickName.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
            checkPassword: formState.inputs.checkPassword.value,
          }),
        });

        const responseData = await response.json();

        if (!response.ok) {
          console.log("signup", responseData.message);
          throw new Error(responseData.message);
        }
        console.log("signup", responseData);
        setIsLoading(false);
        login();
      } catch (err) {
        setIsLoading(false);
        setError(err.message || "알 수 없는 오류입니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={() => setError(null)} />

      <Modal state={state} setIsLoginMode={setIsLoginMode}>
        {isLoading && <LoadingSpinner asOverlay />}

        <Box textAlign="center">
          <img src={logo} alt="" height="80px" width="200px" />
          <Box marginTop="10px">
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
    </React.Fragment>
  );
};

export default Auth;
