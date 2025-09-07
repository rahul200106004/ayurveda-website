import Stripe from 'stripe'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const stripe = new Stripe(process.env.STRIPE_SECRET || '')
export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).end()
  const { amount, appointmentId } = req.body
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{ price_data: { currency: 'INR', product_data: { name: 'Consultation' }, unit_amount: amount }, quantity:1 }],
    mode: 'payment',
    success_url: process.env.SUCCESS_URL || 'https://example.com/success',
    cancel_url: process.env.CANCEL_URL || 'https://example.com/cancel',
    metadata: { appointmentId }
  })
  await prisma.payment.create({ data: { provider: 'stripe', providerPaymentId: session.id, amount, currency: 'INR', status: 'created', appointmentId } })
  res.json({ ok:true, session })
}
