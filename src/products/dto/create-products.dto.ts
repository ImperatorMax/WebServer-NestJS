import { ApiProperty } from "@nestjs/swagger";

export class CreateProductsDprod {
    @ApiProperty({ example: "Smth", description: 'Title of the products'})
    title: string = ''

    @ApiProperty({ example: "Smth", description: 'Title of the payment'})
    description: string = ''

    @ApiProperty({ example: "", description: 'Title of the payment'})
    image: string[] = []

    @ApiProperty({ example: "19.12.2009", description: 'Title of the payment'})
    createdAt: Date = new Date()

    @ApiProperty({ example: "19.12.2009", description: 'Title of the payment'})
    updatedAt: Date = new Date()

    @ApiProperty({ example: true, description: 'Completion status of payment'})
    isHave: boolean = true;
}