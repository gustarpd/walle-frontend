import { Button } from "../../components/Button";
import { ContainerSignUp, FormSignUp, Input } from "./styles";
import { api } from "../../services/api";
import { useState } from "react";

export const SignUp = () => {
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
          localStorage.setItem("ng:usertoken", res.data.token);
          localStorage.setItem("ng:userId", res.data.userId);
          return (window.location.href = "/");
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
            type='password'
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
