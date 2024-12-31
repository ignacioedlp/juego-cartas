import { useState } from 'react';
import Card from './Card';
import { motion, AnimatePresence } from 'framer-motion';
import { text } from 'framer-motion/client';

const colorClasses = {
  red: {
    degradeBackground: 'bg-gradient-to-r from-red-500 to-orange-500',
    colorButton: 'bg-orange-100',
    colorCard: 'bg-red-200',
    text: 'text-red-800',
    borderCard: 'border-red-500',
  },
  blue: {
    degradeBackground: 'bg-gradient-to-r from-sky-400 to-blue-500',
    colorButton: 'bg-blue-100',
    colorCard: 'bg-blue-200',
    text: 'text-blue-800',
    borderCard: 'border-blue-500',
  },
  green: {
    degradeBackground: 'from-green-400 to-green-800',
    colorButton: 'bg-green-100',
    colorCard: 'bg-green-200',
    text: 'text-green-800',
    borderCard: 'border-green-500',
  },
  yellow: {
    degradeBackground: 'from-yellow-400 to-yellow-800',
    colorButton: 'bg-yellow-100',
    colorCard: 'bg-yellow-200',
    text: 'text-yellow-800',
    borderCard: 'border-yellow-500',
  },
  purple: {
    degradeBackground: 'bg-gradient-to-r from-purple-500 to-purple-900',
    colorButton: 'bg-purple-100',
    colorCard: 'bg-purple-200',
    text: 'text-purple-800',
    borderCard: 'border-purple-500',
  },
  pink: {
    degradeBackground: 'bg-gradient-to-r from-fuchsia-500 to-pink-500',
    colorButton: 'bg-pink-100',
    colorCard: 'bg-pink-200',
    text: 'text-pink-800',
    borderCard: 'border-pink-500',
  },
  indigo: {
    degradeBackground: 'from-indigo-400 to-indigo-800',
    colorButton: 'bg-indigo-100',
    colorCard: 'bg-indigo-200',
    text: 'text-indigo-800',
    borderCard: 'border-indigo-500',
  },
  cean: {
    degradeBackground: 'bg-gradient-to-tl from-teal-300 to-cyan-600',
    colorButton: 'bg-teal-100',
    colorCard: 'bg-teal-200',
    text: 'text-teal-800',
    borderCard: 'border-teal-500',
  },
}

function Deck({ questions, title }: { questions: { question: string, category: string, color: string }[], title: string }) {
  const [deck, setDeck] = useState(questions);
  const [currentCard, setCurrentCard] = useState<{ question: string, category: string, color: string } | null>(null);
  const selectedColor = colorClasses[questions[0].color] || colorClasses.red; // Default to green

  function shuffleDeck() {
    const newDeck = [...deck];
    for (let i = newDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }
    setDeck(newDeck);
    setCurrentCard(null);
  }

  function drawCard() {
    if (deck.length > 0) {
      const newDeck = [...deck];
      const drawnCard = newDeck.pop()!;
      setDeck(newDeck);
      setCurrentCard(drawnCard);
    }
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${selectedColor.degradeBackground} flex flex-col items-center justify-center`}>
      <div>
        <a href="/" className={`absolute top-4 left-4 bg-white ${selectedColor.text} px-4 py-2 rounded-full font-semibold shadow-lg`} >
          ← Volver
        </a>
        <h1 className="text-5xl font-bold text-white mb-8 text-center">{title}</h1>
      </div>
      <div className="mb-8 flex flex-col md:flex-row items-center justify-center gap-4">
        <motion.button
          className={`${selectedColor.colorButton} ${selectedColor.text} px-8 py-3 rounded-full font-semibold shadow-lg text-lg`}
          whileHover={{ scale: 1.05, backgroundColor: "#e6f7ff" }}
          whileTap={{ scale: 0.95 }}
          onClick={shuffleDeck}
        >
          🔀 Mezclar Cartas
        </motion.button>
        <motion.button
          className={`${selectedColor.colorButton} ${selectedColor.text} px-8 py-3 rounded-full font-semibold shadow-lg text-lg`}
          whileHover={{ scale: 1.05, backgroundColor: "#e6f7ff" }}
          whileTap={{ scale: 0.95 }}
          onClick={drawCard}
        >
          🃏 Sacar Carta
        </motion.button>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCard ? currentCard.question : 'empty'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentCard ? (
            <Card question={currentCard.question} category={currentCard.category} color={currentCard.color} />
          ) : (
            <div className={`w-72 h-96 ${selectedColor.colorCard} rounded-3xl shadow-lg flex items-center justify-center`}>
              <span className="text-black text-4xl">🕗</span>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      {/* <p className="mt-8 text-white font-semibold text-xl">
        Cartas restantes: {deck.length}
      </p> */}
    </div>
  );
}

export default Deck;
