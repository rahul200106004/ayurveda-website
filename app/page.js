import Hero from '../components/Hero'
import DoctorCard from '../components/DoctorCard'
import FeatureCard from '../components/FeatureCard'

export default function Home() {
  return (
    <div className='space-y-8'>
      <Hero />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        <FeatureCard title='Online Appointments'>
          Book, reschedule, and cancel consultations with ease.
        </FeatureCard>
        <FeatureCard title='Ayurvedic Blogs'>
          Seasonal tips and lifestyle guidance for holistic health.
        </FeatureCard>
        <FeatureCard title='Secure Payments'>
          Pay with Razorpay or Stripe securely and conveniently.
        </FeatureCard>
        <FeatureCard title='Prakriti Analysis'>
          Discover your Ayurvedic body type and personalized health insights.
        </FeatureCard>
      </div>
      <DoctorCard />
    </div>
  )
}
