/**
 * Practice Exercise 7: TaskManager (modern class)
 *
 * - Private: #tasks array, #nextId
 * - Public: name, createdAt
 * - Static private: default settings
 * - Static init block to load settings
 * - Private validation methods
 * - Public methods with encapsulation
 * - Static factory: create from JSON
 */

class TaskManager {
  name;
  createdAt = new Date();

  #tasks = [];
  #nextId = 1;

  static #defaultSettings = {
    maxTasks: 100,
    defaultPriority: 'medium',
  };

  static #settings = {};

  static {
    this.#settings = { ...this.#defaultSettings };
    console.log('TaskManager initialized with settings:', this.#settings);
  }

  constructor(name, initialState = null) {
    this.name = name;
    if (initialState) {
      this.#tasks = initialState.tasks || [];
      this.#nextId = initialState.nextId ?? this.#tasks.length + 1;
    }
  }

  #validateTitle(title) {
    return typeof title === 'string' && title.trim().length > 0;
  }

  #generateId() {
    return this.#nextId++;
  }

  addTask(title, priority = TaskManager.#settings.defaultPriority) {
    if (!this.#validateTitle(title)) {
      throw new Error('Task title must be a non-empty string');
    }
    if (this.#tasks.length >= TaskManager.#settings.maxTasks) {
      throw new Error('Maximum tasks reached');
    }
    const task = {
      id: this.#generateId(),
      title: title.trim(),
      priority,
      completed: false,
      createdAt: new Date(),
    };
    this.#tasks.push(task);
    return task.id;
  }

  getTask(id) {
    return this.#tasks.find((t) => t.id === id) ?? null;
  }

  completeTask(id) {
    const task = this.getTask(id);
    if (task) {
      task.completed = true;
      return true;
    }
    return false;
  }

  getTasks() {
    return [...this.#tasks];
  }

  static createFromJSON(json) {
    const data = typeof json === 'string' ? JSON.parse(json) : json;
    return new TaskManager(data.name || 'Unnamed', {
      tasks: data.tasks || [],
      nextId: data.nextId,
    });
  }

  toJSON() {
    return {
      name: this.name,
      createdAt: this.createdAt,
      tasks: this.#tasks,
      nextId: this.#nextId,
    };
  }
}

const tm = new TaskManager('Work');
tm.addTask('Learn OOP');
tm.addTask('Build project', 'high');
console.log(tm.getTasks());
tm.completeTask(1);
const json = JSON.stringify(tm.toJSON());
const restored = TaskManager.createFromJSON(json);
console.log('Restored tasks:', restored.getTasks());
