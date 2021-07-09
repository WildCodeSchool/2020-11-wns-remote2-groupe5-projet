import moment from 'moment';
import 'moment/locale/fr';

export const parseDateArticle = (date: string): string => {
  return moment(date).format('DD/MM/YYYY');
};

export const parseRelativeTime = (date: string): string => {
  return moment(date).fromNow();
};

export const parseDateToUtc = (date: string) => {
  return new Date(date);
};
