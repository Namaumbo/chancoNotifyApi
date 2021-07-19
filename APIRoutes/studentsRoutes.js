const express = require('express');



const router= express.Router();
        
        // getting all registered students
        router.get('/',require('../controllers/studentController').getRegisteredStudents);
        // // adding a student
        router.post('/RegisteredStudent',require('../controllers/studentController').RegisterAStudent)
      

module.exports = router