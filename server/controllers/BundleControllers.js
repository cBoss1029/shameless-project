let BundleModel=require('../models/Bundle');


module.exports.list =  function list(request, response) {
    BundleModel.find({}).exec()
    .then(bundles=> {response.json(bundles)});
}
module.exports.show =  function show(request, response) {
    const id = request.params.id;
    BundleModel.findById(id).exec()
    .then(bundle => {
        response.json(bundle);
    })}
module.exports.create =  function create(request, response) {
    let newBundle = new BundleModel(
        request.body
    );
    newBundle.save()
    .then(savedBundle => {
        response.json(savedBundle);
    })
}
module.exports.update =  function update(request, response) {
 return response.json({theId: request.params.id});
}
module.exports.remove =  function remove(request, response) {
return response.json({});
}