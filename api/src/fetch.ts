import { Date, Epoch, PrismaClient, Timeline, User } from "@prisma/client"

const prisma = new PrismaClient()

export async function searchUser(username: string): Promise<User | null> {
  const user = await prisma.user.findFirst({
    where: {
      username: username
    }
  })
  return user
}

export async function getTimelines(authorId: number): Promise<Timeline[]> {
  const timelines = await prisma.timeline.findMany({
    where: {
      authorId: authorId
    }
  })
  return timelines
}