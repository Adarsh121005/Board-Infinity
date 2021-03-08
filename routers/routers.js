const { json } = require('express');  
require("dotenv").config();
const express = require("express");
const router = express.Router();
const Create = require('../models/create');
// get all test details

router.get('/',(req, res) => {
    Create.find().exec((error, test) => {
        if(error){
            return res.status(400).json({
                error: "No test is found",
            });
        }
        return res.json(test);
    });
});


// post route

router.post(
	'/',
	(req, res) => {
		const create = new Create(req.body);
		create.save((error, create) => {
			if (error) {
				return res.json({
					error: "Contact Name or Mobile or Email already exists",
				});
			}
			return res.json({ task: create.task, task_des: create.task_des,creator: create.creator,timer: create.timer,createdAt: create.createdAt });
		});
	}
);


module.exports = router;