export type VoteOption = {
  id: string
  text: string
  votes: number
}

export type Poll = {
  id: string
  question: string
  options: VoteOption[]
}
