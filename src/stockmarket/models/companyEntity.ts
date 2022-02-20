export class CompanyEntity {

    constructor(
        public companyCode: String,
        public companyName: String,
        public companyCEO: String,
        public companyTurnover: number,
        public companyWebsite: String,
        public stockExchange: String
    ) { }

}