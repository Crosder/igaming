import { useState } from 'react';
export default function App() {
  const [balance, setBalance] = useState(1000);
  const addBalance = () => setBalance(balance + 500);
  return (
    <div className="text-center p-8 bg-black bg-opacity-80 rounded-xl shadow-xl max-w-md mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-yellow-400">🎰 t1ts bet</h1>
      <p className="text-lg mb-2">Saldo: R$ {balance}</p>
      <button onClick={addBalance} className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-full">
        💸 Recarregar Fichas (Admin)
      </button>
      <div className="mt-6">
        <button className="bg-purple-600 hover:bg-purple-800 px-4 py-2 rounded-full text-white">
          🔗 Conectar Pagamento (Fictício)
        </button>
      </div>
    </div>
  );
}