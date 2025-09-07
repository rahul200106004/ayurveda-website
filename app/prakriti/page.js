import PrakritiQuestionnaire from '../../components/PrakritiQuestionnaire'

export default function PrakritiPage() {
  return (
    <div className='min-h-screen py-12'>
      <div className='text-center mb-8'>
        <h1 className='text-3xl font-bold text-ayuGreen mb-4'>Prakriti Analysis</h1>
        <p className='text-gray-600 max-w-2xl mx-auto'>
          Discover your unique Ayurvedic body type (dosha) through this comprehensive questionnaire.
          Understanding your Prakriti helps in maintaining balance and preventing health issues.
        </p>
      </div>
      <PrakritiQuestionnaire />
    </div>
  )
}
