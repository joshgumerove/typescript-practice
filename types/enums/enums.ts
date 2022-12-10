// allow us to define a set of named constants
// do not exist in JS but exist in lots of other languages

// const PENDING = 0;
// const SHIPPED = 1;
// const DELIVERED = 2;

// // if(status === DELIVERED){
// //     // code
// // } without ts
export {};

enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const status = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus): boolean {
  return status === OrderStatus.DELIVERED;
}
console.log(isDelivered(status));
console.log(isDelivered(OrderStatus.PENDING));

enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}
