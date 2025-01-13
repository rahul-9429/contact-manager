const express = require('express');
const app = express();
const{getContacts, getContact, saveContact, updateContact, deleteContact} = require('../controllers/contactController');
const errorHandler = require('../middleware/errorHandler');
const validateToken = require('../middleware/validateToken');
const port = process.env.PORT || 8000;
app.use(errorHandler);
app.use(express.json());
app.use(validateToken);
app.route('/').get(getContacts).post(saveContact);
app.route('/:id').get(getContact).put(updateContact).delete(deleteContact);
app.post('/test', (req, res) => {
    console.log("Request Body:", req.body);
    res.status(200).json({ received: req.body });
});
module.exports = app;