export type DateType = {
  id: number,
  title: string,
  type: string,
  start: number,
  weight: number,
  place?: string,
  content?: string
}

export type EpochType = {
  id: number,
  title: string,
  type: string,
  start: number,
  end: number,
  place?: string,
  content?: string
}

export type TimelineType = {
  title: string,
  author: string,
  start: number,
  end: number,
  events: {
    dates: DateType[],
    epochs: EpochType[]
  }
}