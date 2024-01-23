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

type completeTimeline = Timeline & {
  dates: Date[],
  epochs: Epoch[]
}

export async function getCompleteTimeline(timelineId: number): Promise<completeTimeline | null> {
  const timeline = await prisma.timeline.findUnique({
    where: {
      id: timelineId
    },
    include: {
      dates: true,
      epochs: true
    }
  })
  return timeline
} 