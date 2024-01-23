import { EpochType, DateType } from "./types"

export function placementLeft(date: number, interval: number[], adjustement: number, zoom: number): string {
  return `calc(${zoom}% * (${date} - ${interval[0]}) / (${interval[1]} - ${interval[0]}) + ${adjustement}px)`
}

export function epochWidth(Epoch: EpochType, interval: number[], zoom: number): string {
  return `calc(${zoom}% * (${Epoch.end} - ${Epoch.start}) / (${interval[1]} - ${interval[0]}))`
}

export function algorithm_card(dates: DateType[], width: number, zoom: number, interval: number[]): DateType[] {

  // trier par ordre décroissants de poids
  dates.sort(function (date1, date2) {
    if (!date1.weight) 
      return 1 // ev2 en premier
    if (!date2.weight)
      return -1 // ev1 en premier
    return date2.weight - date1.weight
  })

  // déterminer la largeur de la frise selon le niveau de zoom
  let timelineWidth = Math.round(width * zoom / 100)

  // calculer les positions sur la frise
  for (const date of dates)
    // @ts-expect-error
    date.position = timelineWidth * (date.date - interval[0]) / (interval[1] - interval[0])

  // creer une liste des cartes à afficher (donc initialement vide)
  let cards: DateType[] = []
  // verfier pour chaque element s'il ne chevauche pas (ou peu) d'événements dans la liste des cartes à afficher :
  for (const date of dates) {
    let stacked = false
    for (const card of cards) {
      // @ts-expect-error
      stacked = stacked || (Math.abs(card.position - date.position) < 150)
      if (stacked)
        break
    }
    if (!stacked)
      cards.push(date)
  }

  return cards
}

export function algorithm_epoch(epochs: EpochType[]): EpochType[][] {
  
  // trier par longueur décroissante
  epochs.sort((epoch1, epoch2) => (epoch2.end - epoch2.start) - (epoch1.end - epoch1.start))
  
  // créer tableau vide à 2 dimension (1 colonne, 1 ligne mais on va en ajouter après...)
  let lines: EpochType[][] = [[]]
  
  let stacked = false
  // pour chaque evenement :
  for (const epoch of epochs) {
    // ligne par ligne en partant du début, voir si c'est possible de l'ajouter sur la ligne (emplacement pas déjà pris ?)
    for (const line of lines) {
      stacked = false // reset avant de tester une nouvelle ligne
      for (const element of line) {
        stacked = stacked || (element.start < epoch.start && epoch.start < element.end)
        stacked = stacked || (element.start < epoch.end && epoch.end < element.end)
        if (stacked) // deux événements se gênent
          break
      }
      if (!stacked) { // une place a été trouvé dans cette ligne
        line.push(epoch)
        break
      }
    }

    // si aucune ligne disponible, ajouter une ligne et l'y placer
    if (stacked) {
      lines.push([])
      lines[lines.length-1].push(epoch)
    }
  }

  return lines
}