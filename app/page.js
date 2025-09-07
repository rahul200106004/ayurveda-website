import Hero from '../components/Hero'
import DoctorCard from '../components/DoctorCard'
import FeatureCard from '../components/FeatureCard'

export default function Home() {
  return (
    <div className='space-y-6'>
      <Hero />
      <div className='grid md:grid-cols-3 gap-4'>
        <FeatureCard title='Online Appointments'>
          Book, reschedule, and cancel consultations.
        </FeatureCard>
        <FeatureCard title='Ayurvedic Blogs'>
          Seasonal tips and lifestyle guidance.
        </FeatureCard>
        <FeatureCard title='Secure Payments'>
          Pay with Razorpay or Stripe securely.
        </FeatureCard>
        <FeatureCard title='Prakriti Analysis'>
          Discover your Ayurvedic body type and health insights.
        </FeatureCard>
      </div>
      <DoctorCard />
    </div>
  )
}
