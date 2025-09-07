import Razorpay from 'razorpay'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).end()
  const { amount, appointmentId } = req.body
  const razorpay = new Razorpay({ key_id: process.env.RAZORPAY_KEY || '', key_secret: process.env.RAZORPAY_SECRET || '' })
  const order = await razorpay.orders.create({ amount, currency: 'INR', receipt: appointmentId })
  await prisma.payment.create({ data: { provider: 'razorpay', providerPaymentId: order.id, amount, currency: 'INR', status: 'created', appointmentId } })
  res.json({ ok:true, order })
}
