import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).end()
  const { name, email, password } = req.body
  const hash = bcrypt.hashSync(password, 10)
  const user = await prisma.user.create({ data: { name, email, password: hash } })
  res.json({ ok:true, id: user.id })
}
