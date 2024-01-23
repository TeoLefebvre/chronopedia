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
  await provisionDates()
  await provisionEpochs()
}

async function provisionUser() {
  const Users = [
    { id: 1, username: "teo", email: "teo.lefebvre@student-cs.fr", password: "mdp" },
    { id: 2, username: "arthur", email: "arthur.remoue@student-cs.fr", password: "mdp" },
    { id: 3, username: "alexis", email: "alexis.peters@student-cs.fr", password: "mdp" }
  ]

  Users.forEach(async (user) => {
    await prisma.user.create({
      data: user
    })
  })
}

async function provisionTimeline() {
  const Timelines = [
    { id: 1, title: "Le XXème siècle", start: 1900, end: 2000, authorId: 1 },
    { id: 2, title: "Seconde Guerre Mondiale", start: 1939, end: 1945, authorId: 1 }
  ]

  Timelines.forEach(async (timeline) => {
    await prisma.timeline.create({
      data: timeline
    })
  })
}

async function provisionDates() {
  const Dates = [
    {
      id: 1,
      title: "Attentat de Sarajevo",
      date: 1914,
      weight: 4,
      place: "Sarajevo, Autriche-Hongrie",
      content: "C'est le début du premier grand conflit mondial",
      timelineId: 1
    },
    {
      id: 2,
      title: "Entrée en guerre de la France",
      date: 1939,
      weight: 3,
      content: "C'est le début du second grand conflit mondial",
      timelineId: 1
    },
    {
      id: 3,
      title: "Chute du mur de Berlin",
      date: 1989,
      weight: 5,
      place: "Berlin, Allemagne",
      content: "Le mur séparant Berlin Ouest et Berlin Est tombe, les habitants peuvent à nouveau circuler.",
      timelineId: 1
    }
  ]

  Dates.forEach(async (date) => {
    await prisma.date.create({
      data: date
    })
  })
}

async function provisionEpochs() {
  const Epochs = [
    {
      id: 4,
      title: "Première Guerre Mondiale",
      start: 1914,
      end: 1918,
      content: "Le premier conflit mondial du 20e siècle",
      timelineId: 1
    },
    {
      id: 5,
      title: "Seconde Guerre Mondiale",
      start: 1939,
      end: 1945,
      content: "Le second conflit mondial du 20e siècle",
      timelineId: 1
    },
    {
      id: 6,
      title: "URSS",
      start: 1917,
      end: 1991,
      content: "L'URSS",
      timelineId: 1
    }
  ]

  Epochs.forEach(async (epoch) => {
    await prisma.epoch.create({
      data: epoch
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