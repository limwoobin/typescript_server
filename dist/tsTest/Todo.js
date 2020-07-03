"use strict";
let todos = [];
function addTodo(todo) {
    todos = [...todos, todo];
}
const newTodo = { id: 1, content: 'typescript', completed: false };
addTodo(newTodo);
console.log(todos);
//# sourceMappingURL=Todo.js.map