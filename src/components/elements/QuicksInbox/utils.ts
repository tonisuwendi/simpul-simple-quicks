export interface IChatHistory {
  id: string
  title: string
  date: string
  currentSender?: string
  message: string
  newMessageIndicator: boolean
}
