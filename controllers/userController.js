const asyncHandler = require('express-async-handler')
const Employee_info = require('../models/empModel')

const getUser = asyncHandler(async (req, res) => {
    const employee_info = await Employee_info.find();

    res.status(200).json(employee_info)
});

const getUsrById = asyncHandler(async (req, res) => {
    const employee_info = await Employee_info.findById(req.params.id)
    if(!employee_info){
        res.status(404)
        throw new Error("Emp not found")
    }
    res.status(200).json(employee_info)
})

const createUser = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    
    if (! name || !email || !phone) {
        res.status(400);
        throw new Error('all fields are required')
    }
    console.log( name, email, phone)
    const employee_info = await Employee_info.create({
        name,
        email,
        phone
    });
    
    res.status(201).json(employee_info)
})

const updateUser = asyncHandler(async (req, res) => { 
    const employee_info =  await Employee_info.findById(req.params.id);
    if(!employee_info) {
        res.status(404);
        throw new Error ("Emp not found");
    }

    const updatedEmployee =  await Employee_info.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updatedEmployee)
})

const delUser = asyncHandler(async (req, res) => {
    const employee_info = await Employee_info.findById(req.params.id);
    if(!employee_info){
        res.status(404);
        throw new Error ("Emp not found")
    }
    await Employee_info.findById(req.params.id);
    res.send("deleted")
    res.status(200).json(Employee_info)
})

module.exports = { getUser, createUser, updateUser, getUsrById, delUser }
