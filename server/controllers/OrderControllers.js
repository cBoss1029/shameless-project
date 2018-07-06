let OrderModel = require('../models/Order');

module.exports.list =  function list(request, response) {
    OrderModel.find({}).exec()
    .then(orders=> {response.json(orders)});
}
module.exports.show =  function show(request, response) {
    const id = request.params.id;
    OrderModel.findById(id).exec()
    .then(order => {
        response.json(order);
    })}
module.exports.create =  function create(request, response) {
    let newOrder = new OrderModel(
        request.body
    );
    newOrder.save()
    .then(savedOrder => {
        response.json(savedOrder);
    })
}
module.exports.update =  function update(request, response) {
 return response.json({theId: request.params.id});
}
module.exports.remove =  function remove(request, response) {
return response.json({});
}