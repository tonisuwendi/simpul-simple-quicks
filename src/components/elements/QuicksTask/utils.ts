export interface ITaskItem {
  id: string
  title: string
  date: string
  description: string
  isCompleted: boolean
  category: string
  stickers: string[]
}

export const AVAILABLE_STICKERS = [
  'important-asap',
  'offline-meeting',
  'virtual-meeting',
  'asap',
  'client-related',
  'self-task',
  'appointments',
  'court-related'
];
