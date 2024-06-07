export interface IListChatHistory {
  id: string
  title: string
  date: string
  currentSender?: string
  message: string
  newMessageIndicator: boolean
  messageLists: IListChatItem[]
}

export interface IListChatItem {
  id: string
  name: string
  message: string
  datetime: string
  isRead: boolean
  replyMessage?: string
}
