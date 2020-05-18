import { GraphQLScalarType } from 'graphql';
import { CustomTypes } from 'meteor/quave:collections/CustomType';

import { DateTimeType } from './DateTimeType';

export const DateTimeResolver = {
  DateTime: new GraphQLScalarType(CustomTypes.scalarAndEjson(DateTimeType)),
};
