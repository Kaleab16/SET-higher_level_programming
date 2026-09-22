class TaskQueueLogger {
  constructor(queueName) {
    this.queueName = queueName;
  }

  logQueueStart() {
    console.log(`Starting queue ${this.queueName}.`);
  }

  notifyHighPriority(priority) {
    if (priority > 9) {
      console.warn(`High priority task added to ${this.queueName}.`);
    }
  }
}

class TaskQueue {
  constructor(name) {
    this.queueName = name;
    this.tasks = [];
    this.isProcessing = false;
    this.logger = new TaskQueueLogger(name);
  }

  addTask(taskFn, priority) {
    if (!taskFn || typeof taskFn !== 'function') {
      console.error('Task must be a function.');
      return;
    }

    const task = {
      taskFn,
      priority,
      timestamp: Date.now()
    };

    this.tasks.push(task);

    this.logger.notifyHighPriority(priority);

    if (this.tasks.length === 1) {
      this.logger.logQueueStart();
      this._startProcessing();
    }
  }

  _startProcessing() {
    this.isProcessing = true;
    // ... logic to process tasks ...
  }
}

module.exports = TaskQueue;
