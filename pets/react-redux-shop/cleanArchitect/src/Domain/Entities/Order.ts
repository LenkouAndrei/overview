import { ORDER_STATUS } from "../Enums/OrderStatus";

export class Order {
    id = null;
    createDate = Date.now();
    status = ORDER_STATUS.CREATED;
    orderItems = []
}