import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Put,
  Param,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Body } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoEntity } from './todo.entity';

@Controller('todo')
export class TodoController {
  private readonly list: TodoEntity[];

  constructor(private readonly todoService: TodoService) {
    this.list = [
      new TodoEntity(13253, 'Maksim', false),
      new TodoEntity(43153, 'Vadim', false),
      new TodoEntity(65574, 'Denis', false),
    ];
  }

  @Get()
  public findAll(): TodoEntity[] {
    return this.list;
  }

  @Post()
  public create(@Body() dto: CreateTodoDto): string {
    this.list.push(
      new TodoEntity(this.list.length + 1, dto.title, dto.completed),
    );

    return 'Todo created';
  }

  @Delete(':id')
  public delete(@Param('id') id: string): string {
    const index = this.list.findIndex((todo) => todo.id === +id);
    if (index != -1) {
      this.list.splice(index, 1);
    }

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
