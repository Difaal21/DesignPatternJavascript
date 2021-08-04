const OrderService = require('./order_service');
const OrderDetailService = require('./order_detail_service');

class SingletonApp {
    constructor() {
        const orderService = new OrderService();
        orderService.save('1');

        const orderDetailService = new OrderDetailService();

        orderDetailService.save('1', "Indomie");
        orderDetailService.save('1', "Sabun");
        orderDetailService.save('1', "Pepsodent");
    }
}

const singletonApp = new SingletonApp();

singletonApp();
