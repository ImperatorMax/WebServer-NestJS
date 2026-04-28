import { ApiProperty } from "@nestjs/swagger";

export class DeletePaymentDpay {
    @ApiProperty({ example: 1, description: 'ID of the todo to delete'})
    id: number = 0
}