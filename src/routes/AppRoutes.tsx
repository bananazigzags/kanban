import { Routes, Route } from "react-router";
import { Header } from "../components";
import { Board, Dashboard } from "../pages/";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="" element={<Dashboard />} />
        <Route path="/projects/:boardId" element={<Board />} />
      </Route>
    </Routes>
  );
};
