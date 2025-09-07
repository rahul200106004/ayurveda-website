const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')
const prisma = new PrismaClient()
async function main(){
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@clinic.com'
  const adminPassword = process.env.ADMIN_PASSWORD || 'AdminPass123!'
  const hashed = bcrypt.hashSync(adminPassword, 10)
  await prisma.user.upsert({ where:{ email: adminEmail }, update:{}, create:{ name:'Admin', email:adminEmail, password:hashed, role:'ADMIN' } })
  console.log('Seeded admin', adminEmail)
}
main().catch(e=>{ console.error(e); process.exit(1) }).finally(()=>prisma.$disconnect())
