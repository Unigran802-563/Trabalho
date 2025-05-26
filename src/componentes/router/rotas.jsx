import { Routes, Route } from "react-router-dom";
import Login from "../../pages/login/login"; // exemplo de página

const Rotas = () => {
  return (
    <Routes>
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default Rotas;
