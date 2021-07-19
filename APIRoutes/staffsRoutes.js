const express = require('express');



const router= express.Router();
        
        // getting all registered students
        router.get('/',require('../controllers/staffController').get_all_staffs);
      
        router.post('/LoginAStaff',require('../controllers/staffController').LoginAStaff)
      
        router.post('/signUpAStaff',require('../controllers/staffController').sign_up_a_lecturer)
        // editing a student
        // router.put('/edit-student/:id',student.updateAStudent)
        // // // deleting a student
        // router.delete('/delete-student/:id',student.deleteAStudent)
        // // // studnet info
        // router.get('/get-student-info/:id',student.getAStudent)
        // // adding subject to students
         // router.post('/')

module.exports = router