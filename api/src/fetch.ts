import { Date, Epoch, PrismaClient, Timeline } from "@prisma/client"

const prisma = new PrismaClient()

export async function getTimeline(timelineId: number): Promise<Timeline | null> {
  const timeline = await prisma.timeline.findUnique({
    where: {
      id: timelineId
    }
  })
  return timeline
}

export async function getDate(dateId: number): Promise<Date | null> {
  const date = await prisma.date.findUnique({
    where: {
      id: dateId
    }
  })
  return date
}

export async function getEpoch(epochId: number): Promise<Epoch | null> {
  const epoch = await prisma.epoch.findUnique({
    where: {
      id: epochId
    }
  })
  return epoch
}
