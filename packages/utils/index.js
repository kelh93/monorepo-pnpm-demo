import dayjs from 'dayjs';
// 当月第一天
export const dayStartofMonth = dayjs().startOf('month');
// 当月最后一天
export const dayEndofMonth = dayjs().endOf('month');

// 昨天
export const yestoday = dayjs().add(-1, 'day');

//计算时间差
export const reminderDay = dayjs(end).diff(start, 'day');
export const reminderMonth = dayjs(end).diff(start, 'month');
export  const reminderYear = dayjs(end).diff(start, 'year');

// 转时间戳
export  const timestampe = dayjs().valueOf();