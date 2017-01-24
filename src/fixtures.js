module.exports = [
  {
    id: 1,
    label: 'Learning JS stack',
    type: 'learning',
    tasks: [
      {
        id: 1,
        description: 'Learn Promises',
        isDone: false,
        runningTime: 24,
      },
      {
        id: 2,
        description: 'Learn Async.js',
        isDone: true,
        runningTime: 45,
      },
      {
        id: 3,
        description: 'Learn Ramda.js',
        isDone: false,
        runningTime: 13,
      },
    ]
  },
  {
    id: 2,
    label: 'Learning how to craft a SPA',
    dueDate: new Date(2017, 4, 22),
    type: 'learning',
    tasks: [
      {
        id: 1,
        description: 'Learn React',
        isDone: true,
        runningTime: 22,
      },
      {
        id: 2,
        description: 'Learn Redux',
        isDone: false,
        runningTime: 7,
      },
    ]
  },
  {
    id: 3,
    label: 'code first sample',
    dueDate: new Date(2017, 4, 22),
    type: 'coding',
  },
  {
    id: 4,
    label: 'implement tests',
    dueDate: new Date(2016, 12, 11),
    type: 'coding',
  },
];
