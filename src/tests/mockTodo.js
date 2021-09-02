const myToDoMock = [
  {
    description: 'Pray Sallah',
    completed: true,
    index: 1,
  },
  {
    description: 'Read Quran',
    completed: false,
    index: 2,
  },
  {
    description: 'exercises',
    completed: false,
    index: 3,
  },
  {
    description: 'coding',
    completed: false,
    index: 4,
  },
  {
    description: 'Play games',
    completed: false,
    index: 5,
  },
];

Object.defineProperty(global, 'myToDoMock', {
  value: myToDoMock,
});
