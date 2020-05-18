# quave:custom-type-date-time

`quave:custom-type-date-time` is a Meteor package that provides a data time type for GraphQL and EJSON.

## Why

It is desired to have the correct type automatically in the client and in the server without manual transformation.

We believe we are not reinventing the wheel in this package but what we are doing is like putting together the wheels in the vehicle :).

## Installation

```sh
meteor add quave:custom-type-date-time
```

## Usage

### GraphQL Server

You register the resolver and the definition itself in the schema.

```javascript
import { DateTimeResolver } from 'meteor/quave:custom-type-date-time/DateTimeResolver';
import { DateTimeDefinition } from 'meteor/quave:custom-type-date-time/DateTimeDefinition';

startGraphQLServer({
  typeDefs: [
    DateTimeDefinition,
  ],
  resolvers: [
    DateTimeResolver,
  ],
});

```

### Model Definition

You define a field with this type.

```javascript
import { createModelDefinition } from 'meteor/quave:definitions';
import { DateTimeType } from 'meteor/quave:custom-type-date-time/DateTimeType';

export const PlayerDefinition = createModelDefinition({
  name: 'Player',
  fields: {
    name: {
      type: String,
    },
    birthday: {
      type: DateTimeType,
      optional: true,
    },
  },
});
```

### Client

You register this type in the client as well then it's going to work with EJSON.

```javascript
import { DateTimeType } from 'meteor/quave:custom-type-date-time/DateTimeType';

DateTimeType.register();
```

### Ready

Now you can use your type anywhere you want, see one example with React.

```javascript
import { DateTime } from 'meteor/quave:custom-type-date-time/DateTime';
import { PlayerDefinition } from '../players/PlayersDefinitions';

// Component
const Form = () => {
  // other hooks
  const [birthday, setBirthday] = useState(undefined);

  const edit = player => {
    cancel();
    setId(player._id);
    setName(player.name);
    setBirthday(player.birthday.formatDate());
  };

  const save = () => {
    const player = {
      _id,
      name,
      birthday: DateTime.parseDate(birthday),
    };

    savePlayer({
      variables: {
        player,
      },
      refetchQueries: () => [PlayerDefinition.graphQLManyQueryName],
    }).then(() => cancel());
  };

  // ... return component
}
```

### License

MIT
