import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret'
export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).end()
  const { email, password } = req.body
  const user = await prisma.user.findUnique({ where: { email } })
  if(!user) return res.status(401).json({ error: 'Invalid' })
  const ok = bcrypt.compareSync(password, user.password)
  if(!ok) return res.status(401).json({ error: 'Invalid' })
  const token = jwt.sign({ sub: user.id, role: user.role }, JWT_SECRET, { expiresIn: '7d' })
  res.json({ ok:true, token })
}
