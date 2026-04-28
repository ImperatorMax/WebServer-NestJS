import { ApiProperty } from "@nestjs/swagger";


export class CreateTodoDto {
    @ApiProperty({ example: "Todo title", description: 'Title of the todo'})
    title: string = ''

    @ApiProperty({ example: false, description: 'Completion status of todo'})
    completed: boolean = false;
}