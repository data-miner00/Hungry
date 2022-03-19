import OrderStatus from './OrderStatus';

export default class Order {
    constructor(
        public id: string,
        public itemId: string,
        public userId: string,
        public orderTime: Date,
        public completeTime: Date,
        public status: OrderStatus,
        public count: number,
        public totalPayable: number,
        public discount: number
    ) {}
}
