import { Router } from "express";
import validateRequest from "../../midellwares/validateRequest";
import { AcademicDepartmentValidation } from "./academicDepartment.validation";
import { academicSemesterControllers } from "../academicSemester/academicSemester.controller";

const router = Router()

router.post('/create-academic-department',validateRequest(AcademicDepartmentValidation.createAcademicDepartmentValidationSchema),academicSemesterControllers.createAcademicSemesterIntoDB);
router.patch('/:academicDepartmentId',validateRequest(AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema),academicSemesterControllers.updateAcademicSemesterIntoDB);
router.get('/:academicDepartmentId',academicSemesterControllers.getSingleAcademicSemesterFromDB);
router.get('/',academicSemesterControllers.getAllAcademicSemestersFromDB)



export const AcademicDepartmentRouter = router;