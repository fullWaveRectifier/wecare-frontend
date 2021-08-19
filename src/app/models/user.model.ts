export class User {
    constructor(
        public userId: string,
        public name: string,
        public gender : string,
        public date_of_birth : string,
        public password : string,
        public mobile_number : number,
        public email: string,
        public pincode: number,
        public city: string,
        public state: string,
        public country: string
    ) {}
}