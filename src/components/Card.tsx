import { motion } from 'framer-motion';

interface CardProps {
  question: string;
  category: string;
  color: string;
}

const categoryEmojis: { [key: string]: string } = {
  'Cultura': '🧉',
  'Historia': '📜',
  'Deporte': '⚽',
  'Desafíos': '🎭',
};

const colorClasses: { [key: string]: any } = {
  green: {
    bg: 'bg-green-100',
    border: 'border-green-500',
    text: 'text-green-900',
    gradient: 'from-green-500 via-white to-green-500',
    buttonBg: 'bg-green-200',
    buttonText: 'text-green-700',
  },
  blue: {
    bg: 'bg-blue-100',
    border: 'border-blue-500',
    text: 'text-blue-900',
    gradient: 'from-blue-500 via-white to-blue-500',
    buttonBg: 'bg-blue-200',
    buttonText: 'text-blue-700',
  },
  red: {
    bg: 'bg-red-100',
    border: 'border-red-500',
    text: 'text-red-900',
    gradient: 'from-red-500 via-white to-red-500',
    buttonBg: 'bg-red-200',
    buttonText: 'text-red-700',
  },
  purple: {
    bg: 'bg-purple-100',
    border: 'border-purple-500',
    text: 'text-purple-900',
    gradient: 'from-purple-500 via-white to-purple-500',
    buttonBg: 'bg-purple-200',
    buttonText: 'text-purple-700',
  },
  yellow: {
    bg: 'bg-yellow-100',
    border: 'border-yellow-500',
    text: 'text-yellow-900',
    gradient: 'from-yellow-500 via-white to-yellow-500',
    buttonBg: 'bg-yellow-200',
    buttonText: 'text-yellow-700',
  },
  pink: {
    bg: 'bg-pink-100',
    border: 'border-pink-500',
    text: 'text-pink-900',
    gradient: 'from-pink-500 via-white to-pink-500',
    buttonBg: 'bg-pink-200',
    buttonText: 'text-pink-700',
  },
  indigo: {
    bg: 'bg-indigo-100',
    border: 'border-indigo-500',
    text: 'text-indigo-900',
    gradient: 'from-indigo-500 via-white to-indigo-500',
    buttonBg: 'bg-indigo-200',
    buttonText: 'text-indigo-700',
  },
  teal: {
    bg: 'bg-teal-100',
    border: 'border-teal-500',
    text: 'text-teal-900',
    gradient: 'from-teal-500 via-white to-teal-500',
    buttonBg: 'bg-teal-200',
    buttonText: 'text-teal-700',
  },
  orange: {
    bg: 'bg-orange-100',
    border: 'border-orange-500',
    text: 'text-orange-900',
    gradient: 'from-orange-500 via-white to-orange-500',
    buttonBg: 'bg-orange-200',
    buttonText: 'text-orange-700',
  },
  gray: {
    bg: 'bg-gray-100',
    border: 'border-gray-500',
    text: 'text-gray-900',
    gradient: 'from-gray-500 via-white to-gray-500',
    buttonBg: 'bg-gray-200',
    buttonText: 'text-gray-700',
  },
  cyan: {
    bg: 'bg-cyan-100',
    border: 'border-cyan-500',
    text: 'text-cyan-900',
    gradient: 'from-cyan-500 via-white to-cyan-500',
    buttonBg: 'bg-cyan-200',
    buttonText: 'text-cyan-700',
  },
};

export default function Card({ question, category, color }: CardProps) {
  const selectedColor = colorClasses[color] || colorClasses.green; // Default to green

  return (
    <motion.div
      className={`w-72 h-96 ${selectedColor.bg} ${selectedColor.border} rounded-3xl shadow-lg flex flex-col justify-between p-6 relative overflow-hidden`}
      whileHover={{ scale: 1.05, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${selectedColor.gradient}`}></div> */}
      <div className={`text-sm font-bold ${selectedColor.text} px-3 py-1 rounded-full self-start mb-4 shadow-md`}>
        {categoryEmojis[category] ?? '🎭'} {category}
      </div>
      <div className={`text-2xl font-semibold text-center flex-grow flex items-center justify-center px-2 ${selectedColor.text}`}>
        {question}
      </div>
      <div className=' flex-row flex justify-end items-center '>
        <div className={`text-sm ${selectedColor.buttonText} italic`}>¡Respondé o Actuá!</div>

      </div>
    </motion.div>
  );
}
