import crypto from 'crypto'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).end()
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, appointmentId } = req.body
  const secret = process.env.RAZORPAY_SECRET || ''
  const shasum = crypto.createHmac('sha256', secret).update(razorpay_order_id + '|' + razorpay_payment_id).digest('hex')
  if(shasum !== razorpay_signature) return res.status(400).json({ ok:false, error: 'Invalid signature' })
  await prisma.payment.create({ data: { provider: 'razorpay', providerPaymentId: razorpay_payment_id, amount: 0, currency: 'INR', status: 'paid', appointmentId } })
  await prisma.appointment.update({ where: { id: appointmentId }, data: { paid: true, paymentId: razorpay_payment_id } })
  res.json({ ok:true })
}
