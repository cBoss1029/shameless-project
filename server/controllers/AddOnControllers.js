let AddOnModel=require('../models/AddOn');


module.exports.list =  function list(request, response) {
    AddOnModel.find({}).exec()
    .then(addOns=> {response.json(addOns)});
}
module.exports.show =  function show(request, response) {
    const id = request.params.id;
    AddOnModel.findById(id).exec()
    .then(addOn => {
        response.json(addOn);
    })}
module.exports.create =  function create(request, response) {
    let newAddOn = new AddOnModel(
        request.body
    );
    newAddOn.save()
    .then(savedAddOn => {
        response.json(savedAddOn);
    })
}
module.exports.update =  function update(request, response) {
 return response.json({theId: request.params.id});
}
module.exports.remove =  function remove(request, response) {
return response.json({});
}