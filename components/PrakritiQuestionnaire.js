'use client'

import { useState } from 'react'

const questions = [
  {
    id: 1,
    question: 'What is your body frame like?',
    options: [
      { text: 'Slim, light, and delicate', dosha: 'vata' },
      { text: 'Medium build, muscular', dosha: 'pitta' },
      { text: 'Heavy, sturdy, and strong', dosha: 'kapha' },
    ],
  },
  {
    id: 2,
    question: 'How is your skin?',
    options: [
      { text: 'Dry, rough, or thin', dosha: 'vata' },
      { text: 'Warm, oily, or sensitive', dosha: 'pitta' },
      { text: 'Thick, oily, or cool', dosha: 'kapha' },
    ],
  },
  {
    id: 3,
    question: 'What is your hair type?',
    options: [
      { text: 'Dry, thin, or curly', dosha: 'vata' },
      { text: 'Fine, oily, or prematurely gray', dosha: 'pitta' },
      { text: 'Thick, oily, or wavy', dosha: 'kapha' },
    ],
  },
  {
    id: 4,
    question: 'How is your digestion?',
    options: [
      { text: 'Irregular or variable', dosha: 'vata' },
      { text: 'Strong, but can get intense', dosha: 'pitta' },
      { text: 'Slow and steady', dosha: 'kapha' },
    ],
  },
  {
    id: 5,
    question: 'What is your sleep pattern?',
    options: [
      { text: 'Light and interrupted', dosha: 'vata' },
      { text: 'Moderate, but can be intense', dosha: 'pitta' },
      { text: 'Deep and long', dosha: 'kapha' },
    ],
  },
  {
    id: 6,
    question: 'How would you describe your temperament?',
    options: [
      { text: 'Anxious, creative, or changeable', dosha: 'vata' },
      { text: 'Ambitious, intelligent, or irritable', dosha: 'pitta' },
      { text: 'Calm, loyal, or stubborn', dosha: 'kapha' },
    ],
  },
  {
    id: 7,
    question: 'How do you handle stress?',
    options: [
      { text: 'Become worried or fearful', dosha: 'vata' },
      { text: 'Become angry or critical', dosha: 'pitta' },
      { text: 'Become withdrawn or lethargic', dosha: 'kapha' },
    ],
  },
  {
    id: 8,
    question: 'What is your energy level like?',
    options: [
      { text: 'Bursts of energy followed by fatigue', dosha: 'vata' },
      { text: 'High and focused energy', dosha: 'pitta' },
      { text: 'Steady and enduring energy', dosha: 'kapha' },
    ],
  },
]

const doshaDescriptions = {
  vata: {
    name: 'Vata',
    description: 'Air and space elements. Creative, quick-thinking, but can be anxious.',
    healthIssues: 'Dry skin, constipation, anxiety, insomnia.',
    recommendations: 'Stay warm, eat warm foods, maintain routine, practice grounding yoga.',
  },
  pitta: {
    name: 'Pitta',
    description: 'Fire and water elements. Intelligent, focused, but can be irritable.',
    healthIssues: 'Acid reflux, skin rashes, anger issues, ulcers.',
    recommendations: 'Eat cooling foods, avoid spicy foods, practice moderation, stay cool.',
  },
  kapha: {
    name: 'Kapha',
    description: 'Earth and water elements. Calm, strong, but can be lethargic.',
    healthIssues: 'Weight gain, congestion, depression, slow digestion.',
    recommendations: 'Exercise regularly, eat light foods, stay active, avoid heavy foods.',
  },
}

export default function PrakritiQuestionnaire() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleAnswer = (dosha) => {
    setAnswers({ ...answers, [currentQuestion]: dosha })
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateResult()
    }
  }

  const calculateResult = () => {
    const scores = { vata: 0, pitta: 0, kapha: 0 }
    Object.values(answers).forEach((dosha) => {
      scores[dosha]++
    })

    const dominant = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b)
    setResult({ scores, dominant })
  }

  const saveResult = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/prakriti', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 'guest', // For now, use guest; in real app, get from auth
          vataScore: result.scores.vata,
          pittaScore: result.scores.pitta,
          kaphaScore: result.scores.kapha,
          dominantDosha: result.dominant,
          recommendations: doshaDescriptions[result.dominant].recommendations,
        }),
      })
      if (response.ok) {
        alert('Result saved successfully!')
      } else {
        alert('Failed to save result.')
      }
    } catch (error) {
      console.error('Error saving result:', error)
      alert('Error saving result.')
    }
    setLoading(false)
  }

  const reset = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setResult(null)
  }

  if (result) {
    const desc = doshaDescriptions[result.dominant]
    return (
      <div className='max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md'>
        <h2 className='text-2xl font-bold mb-4'>Your Prakriti Result</h2>
        <div className='mb-4'>
          <h3 className='text-xl font-semibold'>{desc.name} Dominant</h3>
          <p className='text-gray-600 mb-2'>{desc.description}</p>
          <div className='mb-4'>
            <h4 className='font-semibold'>Scores:</h4>
            <p>Vata: {result.scores.vata}, Pitta: {result.scores.pitta}, Kapha: {result.scores.kapha}</p>
          </div>
          <div className='mb-4'>
            <h4 className='font-semibold'>Potential Health Issues:</h4>
            <p>{desc.healthIssues}</p>
          </div>
          <div className='mb-4'>
            <h4 className='font-semibold'>Recommendations:</h4>
            <p>{desc.recommendations}</p>
          </div>
        </div>
        <div className='flex gap-4'>
          <button onClick={saveResult} disabled={loading} className='px-4 py-2 bg-ayuGreen text-white rounded disabled:opacity-50'>
            {loading ? 'Saving...' : 'Save Result'}
          </button>
          <button onClick={reset} className='px-4 py-2 bg-gray-500 text-white rounded'>Take Again</button>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className='max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-4'>Prakriti Analysis Questionnaire</h2>
      <div className='mb-4'>
        <p className='text-sm text-gray-500'>Question {currentQuestion + 1} of {questions.length}</p>
      </div>
      <div className='mb-6'>
        <h3 className='text-lg font-semibold mb-4'>{question.question}</h3>
        <div className='space-y-2'>
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.dosha)}
              className='w-full text-left p-3 border rounded hover:bg-gray-50'
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
      <div className='w-full bg-gray-200 rounded-full h-2'>
        <div
          className='bg-ayuGreen h-2 rounded-full'
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        ></div>
      </div>
    </div>
  )
}
