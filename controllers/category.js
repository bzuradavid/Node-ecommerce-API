const Category = require('../models/category');
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
const {errorHandler} = require('../helpers/dbErrorHandler')

exports.create = (req, res) => {
    const category = new Category(req.body);
    category.save((err, category) => {
        if (err) {
            return res.status(400).json({
                err: errorHandler(err)
            });
        }
        res.json({
            category
        })
    })
    
}