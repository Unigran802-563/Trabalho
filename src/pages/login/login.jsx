import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input
          type="text"
          placeholder="Usuário"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full p-2 mb-4 border rounded"
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded mb-2 hover:bg-blue-600">
          Entrar
        </button>
        <button
          onClick={() => navigate("/cadastro")}
          className="w-full border border-blue-500 text-blue-500 py-2 rounded hover:bg-blue-50"
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
}
