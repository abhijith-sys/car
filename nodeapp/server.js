const express = require('express')
const app = express();
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/test1');
var conn = mongoose.connection;

conn.on('connected', function () {
    console.log('database is connected successfully');
});

conn.on('disconnected', function () {
    console.log('database is disconnected successfully');
})

conn.on('error', console.error.bind(console, 'connection error:'));


const requestModel = mongoose.model("request", {})





app.listen(8080, function () {
    console.log('listening on 8080')
})

app.get('/', async function (req, res) {

    const data = await requestModel.aggregate([
        {
            $lookup: {
                from: "departments",
                localField: "department",
                foreignField:"_id",
                as: "department",
            },
        },
        { $unwind: "$department" }
        ,
        {
            $lookup: {
                "from": "customerdetails",
                localField: "customer_detail",
                foreignField: "_id",
                "as": "customerdetail",
            },
        },
        { $unwind: "$customerdetail" },
        {
            $lookup: {
                "from": "incidenttypes",
                localField: "incident_type",
                foreignField: "_id",
                "as": "incidenttype",
            },
        },
        { $unwind: "$incidenttype" },
        {
            $lookup: {
                "from": "users",
                localField: "assigned_to",
                foreignField: "_id",
                "as": "assigned_to",
            },
        },
      
       
    ])


    res.send(data)

})