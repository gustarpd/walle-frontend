import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: Props) => {
  const isAuth = localStorage.getItem("ng:usertoken");

  if (isAuth) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
