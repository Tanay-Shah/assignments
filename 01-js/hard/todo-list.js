/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/


class Todo {
  constructor() {
    this.arr = [];
  }
  add(item) {
    this.arr.push(item);
  }

  remove(item) {
    this.arr.splice(item, 1);
  }

  clear() {
    return (this.arr = []);
  }

  get(item) {
    if (item >= this.arr.length) {
      return null;
    }
    return this.arr.at(item);
  }

  update(item, task) {
    if (item < this.arr.length) {
      this.arr.splice(item, 1, task);
    }
  }

  getAll() {
    return this.arr;
  }
}


module.exports = Todo;
