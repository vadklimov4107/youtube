import dayjs from 'dayjs';
import relativedate from 'dayjs/plugin/relativeTime';

dayjs.extend(relativedate);

export function transformDate(createdAt: string): string {
  return dayjs(createdAt).fromNow();
};
