# Ayurvedic Fullstack (Next.js) Starter

This is a starter fullstack Next.js project (App Router) including frontend pages and API routes for appointments, auth, and payments.

## Local setup
1. Install deps:
   ```bash
   npm install
   ```
2. Create `.env` with:
   ```
   DATABASE_URL=postgresql://USER:PASS@HOST:PORT/DB
   JWT_SECRET=your_jwt_secret
   RAZORPAY_KEY=...
   RAZORPAY_SECRET=...
   STRIPE_SECRET=...
   STRIPE_WEBHOOK_SECRET=...
   SUCCESS_URL=http://localhost:3000/success
   CANCEL_URL=http://localhost:3000/cancel
   ```
3. Run Prisma migrate & seed:
   ```bash
   npx prisma migrate dev --name init
   npm run prisma:seed
   ```
4. Run dev server:
   ```bash
   npm run dev
   ```

## Notes
- Replace `public/doctor.jpg` with a real photo.
- Webhook endpoints require correct Stripe secret and `raw` body parsing (example provided).
- This is a starter scaffold: add input validation, production-grade secrets, and tests before launch.
