import { Injectable } from '@nestjs/common';
import { TodoEntity } from './todo.entity';
import { Todo } from './entities/todo.entity';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

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

        const savedTodo = await this.todoRepository.save(newTodo)

        console.log(savedTodo)
        return todo;
    }


    public async findAll(): Promise<Todo[]> {
    const todos = await this.todoRepository.find()
    return todos;
    }

    public async delete(id:number): Promise<void> {
        await this.todoRepository.delete(id)
    }

    public async findById(id: number): Promise<Todo | null> {
        const todo = await this.todoRepository.findOneBy({id})
        return todo;
    }
}
