export class Payment {

    constructor(
        public transactionType:string,
        public transactionDirection:string,
        public transactionId:string,
        public transactionAmount:number,
        public transaction:string,
        public date:Date
        ) {}
}
