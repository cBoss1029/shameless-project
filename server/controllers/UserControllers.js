let UserModel = require('../models/User');

module.exports.list =  function list(request, response) {
    UserModel.find({}).exec()
    .then(users=> {response.json(users)})
}
module.exports.show =  function show(request, response) {
    const id = request.params.id;
    UserModel.findById(id).exec()
    .then(user => {
        response.json(user);
    })
}
module.exports.create =  function create(request, response) {
    let newUser = new UserModel(
        request.body
    );
    newUser.save()
    .then(savedUser => {
        response.json(savedUser);
    })
}
module.exports.update =  function update(request, response) {
 return response.json({theId: request.params.id});
}
module.exports.remove =  function remove(request, response) {
return response.json({});
}