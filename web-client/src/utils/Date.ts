import moment from 'moment';
import 'moment/locale/fr';

export const parseDateArticle = (date: string): string => {
  return moment(date).format('DD/MM/YYYY');
};

export const parseDateComment = (date: string): string => {
  return moment(date).fromNow();
};
