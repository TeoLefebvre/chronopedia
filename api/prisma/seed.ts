import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  await provisionUser()
  await provisionTimeline()
}

async function provisionUser() {
  const Users = [
    {username: "teo", email: "teo.lefebvre@student-cs.fr", password: "mdp"},
    {username: "arthur", email: "arthur.remoue@student-cs.fr", password: "mdp"},
    {username: "alexis", email: "alexis.peters@student-cs.fr", password: "mdp"}
  ]

  Users.forEach(async (user) => {
    await prisma.user.create({
      data: user
    })
  })
}

async function provisionTimeline() {
  const Timelines = [
    {title: "Première Guerre Mondiale", authorId: 1},
    {title: "Seconde Guerre Mondiale", authorId: 2}
  ]

  Timelines.forEach(async (timeline) => {
    await prisma.timeline.create({
      data: timeline
    })
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
  })