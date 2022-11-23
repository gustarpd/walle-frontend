import {
  Balance,
  Cards,
  CashOutTransaction,
  HeaderDashBoard,
  MessageEmpty,
  Table,
  TableCashOut,
  Transactions,
} from "./styles";

import moment from "moment";

import logong from "../../svgs/logo-ngcash-branco.svg";

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

  const [FilterDateValue, setFilterDateValue] = useState("asc");
  const CashOutTransactioId = localStorage.getItem("ng:transactionsCashOutId");

  const navigate = useNavigate();
  const userId = localStorage.getItem("ng:userId");

  async function getDataUser() {
    await api.get(`/account/${userId}`).then((res) => {
      setBalance(res.data.balance);
      return localStorage.setItem(
        "ng:transactionsCashOutId",
        res.data.trasactonCashout
      );
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
          alert(`Dinheiro transferido com sucesso`);
          getDataUser();
        }

        if (res.data.error) {
          return alert(res.data.error);
        }

        if (res.data.message) {
          return alert(res.data.message);
        }
      });
    }

  useEffect(() => {
    async function getDateFiltered() {
      await api
        .get(`/account/filter/${CashOutTransactioId}`, {
          params: {
            datefilter: FilterDateValue,
          },
        })
        .then((res) => {
          setTransactionsFiltered(res.data.filter);
        });
    
      }

    getDateFiltered();
  }, [FilterDateValue]);

  useEffect(() => {
    getDataUser();
  }, []);

  function Logout() {
    localStorage.removeItem("ng:usertoken");
    localStorage.removeItem("ng:username");
    localStorage.removeItem("ng:userId");
    localStorage.removeItem("ng:transactionsCashOutId")
    navigate("/login");
  }

  return (
    <>
      <HeaderDashBoard>
        <img src={logong} />
        <span onClick={Logout}>
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
          <div>
            <h3>CashOut</h3>
            <input
              placeholder="Usuário"
              value={UserNameCashIn}
              onChange={(e) => setUserNameCashIn(e.target.value)}
            />{" "}
            <br />
            <input
              placeholder="Valor"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={SendCashOut}>Transferir valor</button>
          </div>
        </Transactions>
      </Cards>
      <CashOutTransaction>
        <div>
          <h3>transações Cash out Recentes</h3>
          <select onChange={(e) => setFilterDateValue(e.target.value)}>
            <option disabled selected>
              Ordem da data
            </option>
            <option value={"asc"}>maior</option>
            <option value={"desc"}>menor</option>
          </select>
        </div>

        {transactionsFiltered.length === 0 ? (
          <MessageEmpty>
            <p>Selecione um filtro no canto superior esquerdo</p>
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
              {transactionsFiltered.map((item, index) => {
                return (
                  <Table key={index}>
                    <p>
                      {moment(item.createdAt).format(
                        "DD / MM / YYYY  HH:mm:ss"
                      )}
                    </p>
                    <p>{`- ${item.value}`}</p>
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
