# Ramda.js Training

## fixtures

```
  const todos = [
    // include data from './fixtures/todos'
  ];
```

### test1: map

List all todos as [[type, label, dueDate]].

Should use : { compose, pick*, values, map }

Output `props` ('type', 'label', dueDate) must be parameters.

ex:

```
[
  [ 'learning', 'learn JS libraries', date1 ],
  [ 'learn how to craft SPA', date2 ],
  [ 'coding', 'code first sample', date3 ],
  [ 'coding', 'implement tests', date4 ]
]
```

### test2: map and filter

Same as previous but only report about incoming todos (todo.dueDate >= now())

Should use : { ...test1, filter }

### test3: filter and reduce

Compute total running time of 'learning' todos.

Should use : { propOr, reduce, filter, compose }

### test4: filter and chain

Do the same but without `reduce`

Should use : { compose, filter, chain, pluck, ... }
