export type DateType = {
  id: number,
  title: string,
  date: number,
  weight: number,
  place?: string,
  content?: string,
  timelineId: number
}

export type EpochType = {
  id: number,
  title: string,
  start: number,
  end: number,
  place?: string,
  content?: string,
  timelineId: number
}

export type TimelineType = {
  id: number,
  title: string,
  start: number,
  end: number,
  author: string,
  dates: DateType[],
  epochs: EpochType[]
}