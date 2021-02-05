import moment from 'moment';
import 'moment/locale/fr';

export const parseDateArticle = (date: string): string => {
  return moment(date).format('DD/MM/YYYY');
};

let period: string;

export const parseDateComment = (period: moment.unitOfTime.StartOf): string => {
  return moment()
    .startOf(period as moment.unitOfTime.StartOf)
    .fromNow();
};
