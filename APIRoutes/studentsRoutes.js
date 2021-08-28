const express = require('express');



const router= express.Router();
        
        // getting all registered students
        router.get('/',require('../controllers/studentController').getRegisteredStudents);
        // // adding a student
        router.post('/RegisterStudent',require('../controllers/studentController').RegisterAStudent)
        //login a student
        router.post('/loginStudent',require('../controllers/studentController').loginStudent)
      

module.exports = router