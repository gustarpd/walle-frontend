import { Button } from "../../components/Button";
import { Container, FormMains, Input, P } from "./styles";
import logong from "../../svgs/logo-ngcash-branco.svg";
import { api } from "../../services/api";
import { useState } from "react";

interface Props {
  token: string;
  user: string;
  error: string;
  userId: string;
}

export const Login = () => {


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function GoToDashBoard() {
    await api
      .post<Props>("/login", {
        username,
        password,
      })
      .then((res) => {
        if (res.data.error) {
          return alert(res.data.error);
        } else {
          localStorage.setItem("ng:usertoken", res.data.token);
          localStorage.setItem("ng:userId", res.data.user);
          return window.location.href = '/'
        }
      
      
      });
  
    }

  return (
    <>
      <Container>
        <FormMains>
          <h2>NG.CASH SIGNIN</h2>
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            type='password'
            value={password}
            
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={GoToDashBoard}>
            <Button text="Sign In" />
          </span>

          <p>
            Não tem uma conta? <a href="signin">crie uma</a>
          </p>
        </FormMains>
        <P>
          <img src={logong} />
          <h1>A CARTEIRA DA NOVA GERAÇÃO.</h1>
          <h3>É para todas as idades!</h3>
        </P>
      </Container>
    </>
  );
};
