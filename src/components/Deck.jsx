import React, { useState } from 'react';

function Deck({questions}) {
  const [currentQuestion, setCurrentQuestion] = useState(
    'Presiona el botón para sacar una carta'
  );
  const [usedIndices, setUsedIndices] = useState([]);

  const getRandomCard = () => {
    if (usedIndices.length === questions.length) {
      setUsedIndices([]); // Reiniciar el mazo si se agotaron las preguntas
    }

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * questions.length);
    } while (usedIndices.includes(randomIndex));

    setUsedIndices([...usedIndices, randomIndex]);
    setCurrentQuestion(questions[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center gap-6 mt-10">
      <div className="relative w-80 h-48 bg-yellow-200 rounded-lg shadow-lg flex items-center justify-center p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
        <p className="text-lg font-semibold text-center text-gray-800">{currentQuestion}</p>
      </div>
      <button
        onClick={getRandomCard}
        className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
      >
        Sacar Carta
      </button>
    </div>
  );
}

export default Deck;
