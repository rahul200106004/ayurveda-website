import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET || '')
export const config = { api: { bodyParser: false } }
import getRawBody from 'raw-body'
export default async function handler(req,res){
  const sig = req.headers['stripe-signature']
  const buf = await getRawBody(req)
  let event
  try{ event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET) }
  catch(err){ console.error('webhook error', err.message); return res.status(400).end() }
  if(event.type === 'checkout.session.completed'){
    const session = event.data.object
    // handle successful payment (update DB) - left as exercise
    console.log('stripe paid', session.id)
  }
  res.json({ received:true })
}
