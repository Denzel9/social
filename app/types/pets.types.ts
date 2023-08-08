export interface IPets {
  name: string
  avatar: string
  experince: number
  health: number[]
  id: string
  animal: string
  stats: IPetsRanges[]
  ranges: IPetsRanges[]
}

export interface IPetsRanges {
  text: string
  value: number
}
