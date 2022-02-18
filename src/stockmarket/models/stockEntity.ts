export class StockEntity {

    constructor(
        public stockId: number,
        public companyCode: String,
        public stockPrice: number,
        public stockExchange: String,
        public startDate: String,
        public endDate: String

    ) { }

}