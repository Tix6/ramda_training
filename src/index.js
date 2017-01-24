const R = require('ramda');
const fixtures = require('./fixtures');

// Should use : { compose, pick*, values, map }
const test1 = (props, data) => {
  const pickByProps = R.pick(props);
  const mapData = R.compose(R.values, pickByProps);
  const mapper = R.map(mapData);
  return mapper(data);
};

// Should use : { ...test1, filter }
const test2 = (time, data) => {
  const dueDate = d => d[2];
  const isIncoming = d => dueDate(d) >= time;
  const filterByIncoming = R.filter(isIncoming);
  return filterByIncoming(data);
};

// Should use : { propOr, reduce, filter, compose }
const test3 = (data) => {
  const typeIsLearning = todo => todo.type === 'learning';
  const filterByType = R.filter(typeIsLearning);

  /* spread operator not available */
  const accTasks = (acc, item) => R.concat(acc, item.tasks);
  const reduceTodos = R.reduce(accTasks, []);

  const accRunningTime = (acc, item) => acc + (R.propOr(0, 'runningTime')(item));
  const reduceTasks = R.reduce(accRunningTime, 0);

  return R.compose(reduceTasks, reduceTodos, filterByType)(data);
};

// Should use : { compose, filter, chain, pluck, ... }
const test4 = (data) => {
  const typeIsLearning = todo => todo.type === 'learning';
  const filterByType = R.filter(typeIsLearning);

  const getTasks = todo => todo.tasks;
  const chainTasks = R.chain(getTasks);

  const pluckRT = R.pluck('runningTime');

  return R.compose(R.sum, pluckRT, chainTasks, filterByType)(data);
};

const tests = [
  {
    title: 'test 1',
    result: test1(['type', 'label', 'dueDate'], fixtures),
  },
  {
    title: 'test 2',
    result: test2(new Date(), test1(['type', 'label', 'dueDate'], fixtures)),
  },
  {
    title: 'test 3',
    result: test3(fixtures),
  },
  {
    title: 'test 4',
    result: test4(fixtures),
  },
];

R.forEach(test => console.log(`-> ${test.title} :\n`, test.result, '\n'))(tests);
