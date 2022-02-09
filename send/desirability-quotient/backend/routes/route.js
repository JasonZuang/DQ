const express = require('express');
const router = express.Router();
const formTemplate = require('../models/models')

router.post('/form',(request,response)=>{
    const newUser = new formTemplate({
        fullName:request.body.fullName,
        height:request.body.height,
        age:request.body.age,
        salary:request.body.salary,
        penisLength:request.body.penisLength,
        gifts:request.body.gifts,
        bodyFat:request.body.bodyFat
    })
    newUser.save()
    .then(data=>{
        response.json(data);
    })
    .catch(error=>{
        response.json(error);
    })
})

module.exports = router;