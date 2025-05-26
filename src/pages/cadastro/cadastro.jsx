import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Cadastro</h2>
        <input
          type="text"
          placeholder="Nome"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full p-2 mb-4 border rounded"
        />
        <button className="w-full bg-green-500 text-white py-2 rounded mb-2 hover:bg-green-600">
          Criar Conta
        </button>
        <button
          onClick={() => navigate("/")}
          className="w-full border border-green-500 text-green-500 py-2 rounded hover:bg-green-50"
        >
          Voltar para Login
        </button>
      </div>
    </div>
  );
}
