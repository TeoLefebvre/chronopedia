/* 
Script pour "provisionner" la base de données. Pour ça, exécuter les commandes suivantes : 
// pour utiliser la dernière migration et l'appliquer à la base de données : https://www.prisma.io/docs/orm/prisma-client/deployment/deploy-database-changes-with-prisma-migrate
npx prisma migrate deploy
// pour exécuter ce script et ajouter les données dans la base de données : https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding
npx prisma db seed
// pour reinitialiser toute la base de données (drop db, create new db, prisma migrate, seed) : https://www.prisma.io/docs/orm/prisma-client/queries/crud#deleting-all-records-with-prisma-migrate
npx prisma migrate reset
*/

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  await provisionUser()
  await provisionTimeline()
}

async function provisionUser() {
  const Users = [
    {id: 1, username: "teo", email: "teo.lefebvre@student-cs.fr", password: "mdp"},
    {id: 2, username: "arthur", email: "arthur.remoue@student-cs.fr", password: "mdp"},
    {id: 3, username: "alexis", email: "alexis.peters@student-cs.fr", password: "mdp"}
  ]

  Users.forEach(async (user) => {
    await prisma.user.create({
      data: user
    })
  })
}

async function provisionTimeline() {
  const Timelines = [
    {id: 1, title: "Première Guerre Mondiale", authorId: 1},
    {id: 2, title: "Seconde Guerre Mondiale", authorId: 1}
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