import express from 'express';
import { studentControler } from './student.controller';

const router = express.Router();

router.post('/create-student', studentControler.createStudent);
router.get('/retrive-students', studentControler.getAllStudent);
router.get('/:studentId', studentControler.getSingleStudentData);

export const StudentRoute = router;
