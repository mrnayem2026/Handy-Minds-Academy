import express from 'express';
import { studentControler } from './student.controller';

const router = express.Router();

router.post('/create-student', studentControler.createStudent);
router.get('/retrive-students', studentControler.getAllStudent);
router.get('/:studentId', studentControler.getSingleStudentData);
router.put('/:studentId', studentControler.updateSingleStudentData);
router.delete('/:studentId', studentControler.deleteSingleStudentData);

export const StudentRoute = router;
