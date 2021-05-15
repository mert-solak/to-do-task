import moment from 'moment';

export const formatStringDate = (date: string) => moment(date).fromNow();
