const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const AddOnRoutes = require('./routes/AddOnRoutes');
const BundleRoutes = require('./routes/BundleRoutes');
const OrderRoutes = require('./routes/OrderRoutes');
const UserRoutes = require('./routes/UserRoutes');
const AddOn = require('./models/AddOn');
const Bundle = require('./models/Bundle');

const app=express();

mongoose.connect('mongodb://shamelessAdmin:Drowssap21@ds229621.mlab.com:29621/shameless')

app.use(bodyParser.json())
app.use(AddOnRoutes);
app.use(BundleRoutes);
app.use(OrderRoutes);
app.use(UserRoutes);

let {bundles, addOns} = require('../products');

bundles.forEach((p)=>{
    const body = {
        name: p.name,
        includes: p.includes,
        description: p.description,
        price: p.price,
    }
    fetch('/bundles',{
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(response=> response.json());
    

})


// addOns.forEach((p)=>{
//     const newAddOn = new AddOn({
//         name: p.name,
//         price: p.price,
//     })

//     newAddOn.save().then(savedAddOn =>{
//         response.json(savedAddOn)
//     })
// })


app.listen(3001, (err) => {
    if (err) {
    return console.log("Error", err);
    }
console.log("Listening on port 3001");
});