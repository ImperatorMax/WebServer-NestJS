import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Render,
} from '@nestjs/common';

class TaskEntity {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly description: string,
    public readonly completed: boolean = false,
  ) {}
}

@Controller('todo')
export class TodoController {
    private tasks: TaskEntity[];

    constructor() {
    this.tasks = [
        new TaskEntity(1, 'Task 1', 'Description for Task 1'),
        new TaskEntity(2, 'Task 2', 'Description for Task 2'),
        new TaskEntity(3, 'Task 3', 'Description for Task 3'),
        new TaskEntity(
        4,
        'Сделать домашнее задание',
        'Description for домашнее задание',
        ),
    ];
    }

    @Get()
    @Render('todo')
    public getTodos() {
    return {
        tasks: this.tasks,
    };
    }

  @Post()
  @Render('todo')
  public addTodo(@Body() body: TaskEntity) {
    console.log(body);

    this.tasks.push(
      new TaskEntity(
        this.tasks.length + 1,
        body.name,
        body.description,
        body.completed,
      ),
    );

    return {
      tasks: this.tasks,
    };
  }

  @Delete(':id')
  @Render('todo')
  public deleteTodo(@Param('id') id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);

    return {
      tasks: this.tasks,
    };
  }
}