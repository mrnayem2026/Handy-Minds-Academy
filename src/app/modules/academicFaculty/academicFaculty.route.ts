import { Router } from "express";
import validateRequest from "../../midellwares/validateRequest";
import { AcademicFacultyValidation } from "./academicFaculty.validation";
import { AcademicFacultyControllers } from "./academicFaculty.controller";

const router = Router();

router.post('/create-academic-faculty',validateRequest(AcademicFacultyValidation.createAcademicFacultyValidationSchema), AcademicFacultyControllers.createAcademicFacultyIntoDB)
router.patch('/:facultyId',validateRequest(AcademicFacultyValidation.updateAcademicFacultyValidationSchema), AcademicFacultyControllers.updateAcademicFacultyIntoDB)
router.get('/:facultyId',AcademicFacultyControllers.getSingleAcademicFaculty)
router.get('/',AcademicFacultyControllers.getAllAcademicFacultiesFromDB)


export const AcademicFacultyRouter= router;