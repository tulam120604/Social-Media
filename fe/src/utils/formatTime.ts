import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

/**
 * Format thời gian dạng "7 tiếng trước", "1 ngày trước", "15 phút trước"
 * @param isoTime Chuỗi thời gian dạng ISO từ server
 * @returns Chuỗi mô tả thời gian đã trôi qua
 */
export function formatRelativeTime(isoTime: string): string {
  const now = dayjs();
  const inputTime = dayjs(isoTime);

  const diffInDays = now.diff(inputTime, 'day');
  const diffInHours = now.diff(inputTime, 'hour');
  const diffInMinutes = now.diff(inputTime, 'minute');

  if (diffInDays >= 1) {
    return `${diffInDays} day ago`;
  } else if (diffInHours >= 1) {
    return `${diffInHours} hours ago`;
  } else {
    return `${diffInMinutes} minutes ago`;
  }
}
