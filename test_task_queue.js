const TaskQueue = require('./task_queue_clean');

const queue = new TaskQueue('Test Queue');

queue.addTask(function () {
  console.log('Task executed');
}, 5);

queue.addTask(function () {
  console.log('High priority task');
}, 10);

queue.addTask('not a function', 1);

console.log('Tasks:', queue.tasks.length);
console.log('Processing:', queue.isProcessing);
