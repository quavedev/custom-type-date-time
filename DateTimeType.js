/* eslint-disable class-methods-use-this */
import SimpleSchema from 'simpl-schema';

import { CustomType } from 'meteor/quave:collections/CustomType';
import { DateTime } from './DateTime';

class _DateTimeType extends CustomType {
  name() {
    return 'DateTime';
  }

  description() {
    return 'Represents Date time';
  }

  doToPersist(dateTime) {
    return dateTime.toDate();
  }

  doFromPersisted(date) {
    return new DateTime(date.getTime());
  }

  toSimpleSchema() {
    return new SimpleSchema({ ms: SimpleSchema.Integer });
  }

  fromJSONValue(time) {
    return new DateTime(time);
  }
}
export const DateTimeType = new _DateTimeType();
