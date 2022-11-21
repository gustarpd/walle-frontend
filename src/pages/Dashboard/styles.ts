import styled from "styled-components";

export const HeaderDashBoard = styled.div`
  width: 100%;
  height: 85px;
  background-color: #191919;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  img {
    width: 100px;
    height: 75px;
    margin: 0 0 0 10px;
  }

  span {
    cursor: pointer;
    margin: 0 10px 0 0;
  }
`;

export const Cards = styled.div`
  height: 300px;
  margin: 40px 0 0 0;
  margin: 0 auto;

  width: 56%;

  display: flex;

  div {
    width: 100%;
  }
`;

export const Balance = styled.div`
  width: 50%;
  height: 200px;
  margin: 0 10px 0 0;
  background-color: #191919;

  h3,
  p,
  h4 {
    margin-left: 20px;
  }
`;

export const Transactions = styled.div`
  height: 200px;
  background-color: #191919;

  h3 {
    margin-left: 20px;
  }

  input {
    margin-left: 20px;
    width: 57%;
  }

  button {
    width: 21rem;
    height: 30px;
    background-color: #fff;
    margin-top: 10px;
    margin-left: 20px;
    outline: 0;
    border: 0;
    cursor: pointer;
  }
`;

export const CashOutTransaction = styled.div`
  margin: 0 auto;
  width: 56%;
  height: 200px;
  padding: 20px;

  background-color: #191919;
  height: auto;

  div {
    margin-top: 20px;
    padding: 10px 0 0 0;
    margin: 0 auto;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    select {
      border: 0;
      outline: 0;
      background-color: #191919;
      color: #fff;
    }

    h3 {
      margin-top: 10px;
    }
  }
`;

export const TableCashOut = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid #f5f5f5;

  div {
    width: 30%;
  }

  div:last-child {
    display: flex;
    justify-content: end;
  }
`;

export const Date = styled.div`
  word-break: break-all;
`;

export const Value = styled.div`
  background-color: navajowhite;
`;

export const Table = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 73%;
  margin: 0 auto;
`;

export const MessageEmpty = styled.span`
  width: 100%;

  text-align: center;
`;


export const UserName = styled.span`
 padding: 5px 23px;
 color: #000;
 background-color: #f5f5f5;
`