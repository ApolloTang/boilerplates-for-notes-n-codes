console.log('hello')

namespace Model {
  export enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted,
  }
}

namespace Model {
  export interface Todo {
    id: number;
    name: string;
    state: TodoState;
  }
}


namespace DataAccess {
  export interface ITodoService {
    add(todo: Model.Todo): Model.Todo;
    delete(todoId: number): void;
    getAll(): Model.Todo[];
    getById(todoId: number): Model.Todo;
  }
}
