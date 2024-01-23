import { TimelineType } from "./types"

export const timeline: TimelineType = {
  id: 1,
  title: "20e siècle",
  author: "Téo",
  start: 1900,
  end: 2000,
  events: {
    dates: [
      {
        id: 1,
        title: "Attentat de Sarajevo",
        type: "date",
        start: 1914,
        place: "Sarajevo, Autriche-Hongrie",
        content: "C'est le début du premier grand conflit mondial",
        weight: 4
      },
      {
        id: 2,
        title: "Entrée en guerre de la France",
        type: "date",
        start: 1939,
        content: "C'est le début du second grand conflit mondial",
        weight: 3
      },
      {
        id: 6,
        title: "Chute du mur de Berlin",
        type: "date",
        start: 1989,
        place: "Berlin, Allemagne",
        content: "Le mur séparant Berlin Ouest et Berlin Est tombe, les habitants peuvent à nouveau circuler.",
        weight: 5
      }
    ],
    epochs: [
      {
        id: 3,
        title: "Première Guerre Mondiale",
        type: "epoch",
        start: 1914,
        end: 1918,
        content: "Le premier conflit mondial du 20e siècle"
      },
      {
        id: 4,
        title: "Seconde Guerre Mondiale",
        type: "epoch",
        start: 1939,
        end: 1945,
        content: "Le second conflit mondial du 20e siècle"
      },
      {
        id: 5,
        title: "URSS",
        type: "epoch",
        start: 1917,
        end: 1991,
        content: "L'URSS"
      }
    ]
  }
}