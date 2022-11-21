import { Button } from "../../components/Button";
import { ContainerSignUp, FormSignUp, Input } from "./styles";

import logong from "../../svgs/logo-ngcash-branco.svg";

import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { SetStateAction, useState } from "react";

export const SignUp = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function CreateNewAccount() {
    await api
        .post("/signup", {
           username,
           password,
      })
      .then((res) => {
        if (res.data.newUser) {
          alert(res.data.newUser.error);
        }
        if (res.data.token) {
          localStorage.setItem("ng:token", res.data.token);
          localStorage.setItem("ng:userId", res.data.userId)
          localStorage.setItem("ng:user", res.data.username)
          return window.location.href = '/'
        }
      });
  }

  return (
    <>
      <ContainerSignUp>
        <FormSignUp>
          <h3>Criar uma conta</h3>

          <Input
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span onClick={CreateNewAccount}>
            <Button text="Criar conta" />
          </span>
        </FormSignUp>
      </ContainerSignUp>
    </>
  );
};
