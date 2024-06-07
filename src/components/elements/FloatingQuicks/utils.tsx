import { QUICK_TAB_ENUM } from '@/helpers/enum';
import { ChromeReaderModeOutlined, QuestionAnswerOutlined } from '@mui/icons-material';

export interface IQuickTab {
  name: QUICK_TAB_ENUM
  title: string
  activeClass: string
  inactiveClass: string
  icon: React.ReactNode
}

const QUICK_TAB: IQuickTab[] = [
  {
    name: QUICK_TAB_ENUM.INBOX,
    title: 'Inbox',
    activeClass: 'text-primary-graphite bg-indicator-royal hover:text-primary-graphite hover:bg-indicator-royal',
    inactiveClass: 'bg-primary-graphite text-indicator-royal hover:text-indicator-royal hover:bg-primary-graphite',
    icon: <QuestionAnswerOutlined className="w-[27px]" />
  },
  {
    name: QUICK_TAB_ENUM.TASK,
    title: 'Task',
    activeClass: 'text-primary-graphite bg-indicator-ember hover:text-primary-graphite hover:bg-indicator-ember',
    inactiveClass: 'bg-primary-graphite text-indicator-ember hover:text-indicator-ember hover:bg-primary-graphite',
    icon: <ChromeReaderModeOutlined className="w-[27px]" />
  }
];

export {
  QUICK_TAB
};
