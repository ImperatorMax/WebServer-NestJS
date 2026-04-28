import { ApiProperty } from "@nestjs/swagger";


export class CreatePaymentDpay {
    @ApiProperty({ example: "0000000000000000", description: 'Title of the payment'})
    cardNumber: string = ''

    @ApiProperty({ example: true, description: 'Completion status of payment'})
    isActive: boolean = true;
}