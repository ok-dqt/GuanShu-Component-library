import dayjs, { Dayjs } from 'dayjs';
import { DateType } from './types';

export const getDateRange = (dateType: DateType, customDate: Dayjs | null): string => {
  const now = dayjs();

  switch (dateType) {
    case DateType.Recent7: {
      const endDate = now.subtract(1, 'day');
      const startDate = endDate.subtract(6, 'day');
      return `${startDate.format('YYYY-MM-DD')} | ${endDate.format('YYYY-MM-DD')}`;
    }

    case DateType.Recent30: {
      const endDate = now.subtract(1, 'day');
      const startDate = endDate.subtract(29, 'day');
      return `${startDate.format('YYYY-MM-DD')} | ${endDate.format('YYYY-MM-DD')}`;
    }

    case DateType.Day: {
      if (!customDate) return '请选择日期';
      return customDate.format('YYYY-MM-DD');
    }

    case DateType.Week: {
      if (!customDate) return '请选择周';
      const weekStart = customDate.startOf('week').add(1, 'day');
      const weekEnd = customDate.endOf('week').add(1, 'day');
      return `${weekStart.format('YYYY-MM-DD')} | ${weekEnd.format('YYYY-MM-DD')}`;
    }

    case DateType.Month: {
      if (!customDate) return '请选择月份';
      const monthStart = customDate.startOf('month');
      const monthEnd = customDate.endOf('month');
      return `${monthStart.format('YYYY-MM-DD')} | ${monthEnd.format('YYYY-MM-DD')}`;
    }

    default:
      return '';
  }
};
