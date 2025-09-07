import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { userId, vataScore, pittaScore, kaphaScore, dominantDosha, recommendations } = req.body

    if (!userId || vataScore == null || pittaScore == null || kaphaScore == null || !dominantDosha) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    try {
      const result = await prisma.prakritiResult.create({
        data: {
          userId,
          vataScore,
          pittaScore,
          kaphaScore,
          dominantDosha,
          recommendations,
        },
      })
      res.status(201).json(result)
    } catch (error) {
      console.error('Error saving Prakriti result:', error)
      res.status(500).json({ error: 'Failed to save Prakriti result' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
