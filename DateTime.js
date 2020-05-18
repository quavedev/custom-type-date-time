import { EJSONType } from 'meteor/quave:collections/EJSONType';
import parseDateFns from 'date-fns/parse';
import formatDateFns from 'date-fns/format';

export class DateTime extends EJSONType {
  constructor(time) {
    super();
    this.ms =
      (time && time.getTime && typeof time.getTime === 'function'
        ? time.getTime()
        : time) || new Date().getTime();
  }

  toJSONValue() {
    return this.ms;
  }

  toDate() {
    return new Date(this.ms);
  }

  formatDate(pattern = 'yyyy-MM-dd') {
    return formatDateFns(this.toDate(), pattern);
  }

  static parseDate(date, pattern = 'yyyy-MM-dd', baseDate = new Date()) {
    return new DateTime(parseDateFns(date, pattern, baseDate));
  }
}
