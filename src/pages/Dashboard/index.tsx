import {
  Balance,
  Cards,
  CashOutTransaction,

  HeaderDashBoard,
  MessageEmpty,
  Table,
  TableCashOut,
  Transactions,
  UserName,
} from "./styles";

import moment from "moment";

import logong from "../../svgs/logo-ngcash-branco.svg";
import { Input } from "../Login/styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

interface FilterType {
  createdAt: string;
  value: string;
}

export const Dashboard = () => {
  const [UserBalance, setBalance] = useState("");
  const [UserNameCashIn, setUserNameCashIn] = useState("");
  const [value, setValue] = useState("");
  const [transactionsFiltered, setTransactionsFiltered] = useState<
    FilterType[]
  >([]);
  

  const navigate = useNavigate();

  const userId = localStorage.getItem("ng:userId");
  const userName = localStorage.getItem("ng:user");
  const token = localStorage.getItem("ng:token");


  async function getDataUser() {
    await api.get(`/acount/${userId}`).then((res) => {
      setBalance(res.data.balance);
      setTransactionsFiltered(res.data.filter);
    });
  }


  async function SendCashOut() {
    await api
      .post(`/cashout/${userId}`, {
        UserNameCredited: UserNameCashIn,
        value,
      })
      .then((res) => {
        if (res.data.transaction) {
          return alert(`Dinheiro transferido com sucesso`);
        }

        if(res.data.error) {
          return alert(res.data.error)
        }

      });
  }

  useEffect(() => {
    getDataUser()
  }, []);

  useEffect(() => {
    getDataUser()
  }, [UserBalance])

  function Logout() {
    localStorage.removeItem("ng:token");
    localStorage.removeItem("ng:user");
    localStorage.removeItem("ng:userId")
    navigate("/login");
  }

  return (
    <>
      <HeaderDashBoard>
        <img src={logong} />
        <span onClick={Logout}>

        <UserName>{`Olá, ${userName}`}</UserName>
          <span>Logout</span>
       
        </span>
      </HeaderDashBoard>
      <Cards>
        <Balance>
          <h3>Conta</h3>
          <p>Saldo disponivel</p>
          <h4>R$ {UserBalance}</h4>
        </Balance>
        <Transactions>
          <h3>CashOut</h3>
          <Input
            placeholder="Usuario"
            value={UserNameCashIn}
            onChange={(e) => setUserNameCashIn(e.target.value)}
          />{" "}
          <br />
          <Input
            placeholder="Valor"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={SendCashOut}>Transferir valor</button>
        </Transactions>
      </Cards>
      <CashOutTransaction>
        <div>
          <h3>Transações CashIn Recentes</h3>
        </div>

        {transactionsFiltered.length === 0 ? (
          <MessageEmpty>
            <p>Você não recebeu nenhuma transação</p>
          </MessageEmpty>
        ) : (
          <>
            <TableCashOut>
              <div>
                <p>Data</p>
              </div>
              <div>
                <p>Valor</p>
              </div>
            </TableCashOut>
            <>
              {transactionsFiltered.map((item) => {
                return (
                  <Table>
                    <p>
                      {moment(item.createdAt).format(
                        "DD / MM / YYYY  HH:mm:ss"
                      )}
                    </p>
                    <p>{`+ ${item.value}`}</p>
                  </Table>
                );
              })}
            </>
          </>
        )}
      </CashOutTransaction>
    </>
  );
};
