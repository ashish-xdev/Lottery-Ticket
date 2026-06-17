import React, { useState } from 'react';

function Lottery() {
  let [lottery, setLottery] = useState([0, 0, 0]);
  let [winner, setWinner] = useState(null);

  function calculate(ticket) {
    let sum = ticket[0] + ticket[1] + ticket[2];
    return sum == 15;
  }

  function GenerateTicket() {
    let a = Math.floor(Math.random() * 10);
    let b = Math.floor(Math.random() * 10);
    let c = Math.floor(Math.random() * 10);

    let ticket = [a, b, c];

    setLottery(ticket);

    let result = calculate(ticket);
    setWinner(result);
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-96 text-center">

        <h1 className="text-3xl font-bold mb-6">
          🎟 Lottery Game
        </h1>

        <div className="flex justify-center gap-4 mb-6">
          {lottery.map((count, index) => (
            <div
              key={index}
              className="w-16 h-16 border-2 border-blue-500 rounded-xl flex items-center justify-center text-2xl font-bold shadow"
            >
              {count}
            </div>
          ))}
        </div>

        <button
          onClick={GenerateTicket}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-200"
        >
          Generate Ticket
        </button>

        <div className="mt-6">
          {winner === true && (
            <h2 className="text-green-600 text-xl font-bold">
              🎉 Congratulations! You Won
            </h2>
          )}

          {winner === false && (
            <h2 className="text-red-500 text-xl font-bold">
              😢 Better Luck Next Time
            </h2>
          )}
        </div>

      </div>
    </div>
  );
}

export default Lottery;