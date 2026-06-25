import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Put,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Body } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoEntity } from './todo.entity';
import { TodoRepository } from './todo.repository';

@Controller('todo')
export class TodoController {
  private readonly list: TodoEntity[];

  constructor(
    private readonly todoService: TodoService,
    private readonly todoRepo: TodoRepository,
  ) {
    this.list = [
      new TodoEntity(13253, 'Maksim', false),
      new TodoEntity(43153, 'Vadim', false),
      new TodoEntity(65574, 'Denis', false),
    ];
  }

  @Get()
  public async findAll(): Promise<TodoEntity[]> {
    const todos = await this.todoRepo.findAll();
    return todos;
  }

  @Get(':id')
  public async findById(@Param('id') id: string): Promise<TodoEntity | null> {
    const todo = await this.todoRepo.findById(+id); // "1" -> 1
    if (!todo) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }
    return todo;
  }

  @Post()
  public async create(@Body() dto: CreateTodoDto): Promise<string> {
    const newTodo = new TodoEntity(
      this.list.length + 1,
      dto.title,
      dto.completed,
    );

    this.list.push(newTodo);

    await this.todoRepo.create(newTodo);

    return 'Todo created';
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<string> {
    await this.todoRepo.delete(+id);

    return 'Todo deleted';
  }

  @Patch()
  public update(): string {
    return 'Todo updated';
  }

  @Put()
  public fullupdate(): string {
    return 'Todo fully updated';
  }
}
