import { Inject, Injectable } from "@nestjs/common";
import { TodoEntity } from "./todo.entity";
import { Todo } from "./entities/todo.entity";

import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";



@Injectable()
export class TodoRepository {

    constructor(
        @InjectRepository(Todo)
        private readonly todoRepository: Repository<Todo>,
    ) {}


    public async create(todo: TodoEntity): Promise<TodoEntity> {
        const todoData = new Todo()
            todoData.title = todo.title;
            todoData.completed = todo.completed;
        const newTodo = this.todoRepository.create(todoData);

        await this.todoRepository.save(newTodo)
        return todo;
    }
}