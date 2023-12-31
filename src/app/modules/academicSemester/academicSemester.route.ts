import { Router } from 'express';
import validateRequest from '../../midellwares/validateRequest';
import { AcademicSemesterValidations } from './academicSemester.validation';
import { academicSemesterControllers } from './academicSemester.controller';

const router = Router();

router.post(
  '/create-academic-semester',
  validateRequest(
    AcademicSemesterValidations.createAcdemicSemesterValidationSchema,
  ),
  academicSemesterControllers.createAcademicSemesterIntoDB,
);
router.get('/', academicSemesterControllers.getAllAcademicSemestersFromDB);
router.get(
  '/:semesterId',
  academicSemesterControllers.getSingleAcademicSemesterFromDB,
);
router.put(
  '/:semesterId',
  validateRequest(
    AcademicSemesterValidations.updateAcdemicSemesterValidationSchema,
  ),
  academicSemesterControllers.updateAcademicSemesterIntoDB,
);

export const AcademicRouter = router;
