var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var todos = [];
function addTodo(todo) {
    todos = __spreadArrays(todos, [todo]);
}
var newTodo = { id: 1, content: 'typescript', completed: false };
addTodo(newTodo);
console.log(todos);
