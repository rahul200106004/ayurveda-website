import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export default async function handler(req,res){
  if(req.method==='POST'){
    const { name, date, phone } = req.body
    console.log(name, date, phone);
    const appt = await prisma.appointment.create({ data: { name, datetime: new Date(date), phone } })
    return res.json({ ok:true, id: appt.id })
  } else {
    const list = await prisma.appointment.findMany()
    return res.json({ appointments: list })
  }
}
