function processOrderList(orderList, orderId, state) {
    // Write your code here
    var arr = new Array(...orderList);
    arr.find(_ => _.id === orderId).state = state;

    const result = arr.filter(_ => _.state !== "Delivered")

    return result

}

console.log(processOrderList([
    { id: 1, state: 'Delivered' },
    { id: 2, state: 'Delivered' }
], 1, 'Processing'))