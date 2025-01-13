const Contact = require('../models/contactModel')
const Userr = require('../models/userModel')
const asyncHandler = require('express-async-handler');
require('dotenv').config();
//@desc Get all the contacts
//@route GET /api/contacts
//@access Private
const getContacts = asyncHandler(async (req, res) => {

    const Contacts = await Userr.find({user_id: req.user._id});
    res.status(200).json({Contacts});
});

//@desc Get particular contact
//@route GET /api/contacts/:id
//@access Private
const getContact = asyncHandler(async (req, res) => {
    const Contacts = await Contact.findById(req.params.id);
    if(!Contacts){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json({Contacts });
});

//@desc Save a new contact
//@route POST /api/contacts
//@access Private
const saveContact = asyncHandler(async  (req,res)=>{
    const {name, email, phone} = req.user;
    // console.log(name, email, phone);
     console.log(req.user.id);
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are required");
    }
        const newContact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user._id
});
    res.status(201).json(newContact);
});


//@desc Update contact
//@route PUT /api/contacts/:id
//@access Private
const updateContact = asyncHandler(async (req, res) => {
    const Contacts = await Contact.findById(req.params.id);
    if(!Contacts){
        res.status(404);
        throw new Error("Contact not found");
    }
    const updateContact = await Contact.findByIdAndUpdate(req.params.id,req.body,{new: true});
    res.status(200).json({ updateContact });
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access Private
const deleteContact = asyncHandler(async (req, res) => {
    const Contacts = await Contact.findById(req.params.id);
    if(!Contacts){
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ Contacts });
});

module.exports = { getContacts, getContact, saveContact, updateContact, deleteContact };
