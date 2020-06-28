interface Todo {
    id: number;
    content: string;
    completed: boolean;
}

let todos: Todo[] = [];

function addTodo(todo: Todo) {
    todos = [...todos , todo];
}

const newTodo: Todo = { id: 1 , content: 'typescript' , completed: false};
addTodo(newTodo);
console.log(todos);