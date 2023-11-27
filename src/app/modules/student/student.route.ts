import express from 'express';
import { studentControler } from './student.controller';

const router = express.Router();

router.post('/create-student', studentControler.createStudent);
router.get('/retrive-students', studentControler.getAllStudent);

export const StudentRoute = router;
