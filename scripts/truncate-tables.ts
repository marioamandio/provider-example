import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function truncateTables(): Promise<void> {
  try {
    await prisma.$executeRaw`DELETE FROM "Movie"`
    await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name = 'Movie'`
    console.log('Table truncated successfully')
    await prisma.$disconnect()
  } catch (error) {
    console.error('Something went wrong truncating tables', error)
  }
}
