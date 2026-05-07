import { ApiProperty } from "@nestjs/swagger";

export class CreateUsersDto {
    @ApiProperty({ example: "Smth", description: 'Title of the users'})
    username: string = ''

    @ApiProperty({ example: "johndoe@gmail.com", description: 'Title of the users'})
    email: string = ''

    @ApiProperty({ example: 1332, description: 'Title of the users'})
    password: number = 0

    @ApiProperty({ example: "Smth", description: 'Title of the users'})
    firstName: string = ''

    @ApiProperty({ example: "Smth", description: 'Title of the users'})
    lastName: string = ''
}