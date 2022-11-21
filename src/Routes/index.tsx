import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Logout } from "../pages/Logout";
import { SignUp } from "../pages/SignUp";
import { RequireAuth } from "./RequireAuth";

export function Rotas() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignUp />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/" element={ <RequireAuth><Dashboard /></RequireAuth>} />
    </Routes>
  );
}
