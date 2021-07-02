const express = require('express');



const router= express.Router();
        
        // getting all registered students
        router.get('/',require('../controllers/studentController').getRegisteredStudents);
        // // adding a student
        router.post('/RegisteredStudent',require('../controllers/studentController').RegisterAStudent)
        // // editing a student
        // router.put('/edit-student/:id',student.updateAStudent)
        // // // deleting a student
        // router.delete('/delete-student/:id',student.deleteAStudent)
        // // // studnet info
        // router.get('/get-student-info/:id',student.getAStudent)
        // // adding subject to students
         // router.post('/')

module.exports = router