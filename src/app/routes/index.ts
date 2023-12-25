import { Router } from 'express';
import { StudentRoute } from '../modules/student/student.route';
import { UserRoutes } from '../modules/user/user.route';
import { AcademicRouter } from '../modules/academicSemester/academicSemester.route';
import { AcademicFacultyRouter } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicDepartmentRouter } from '../modules/academicDepartment/academicDepartment.route';
import { CourcesRouter } from '../modules/course/course.route';
import { SemesterRegistrationRoutes } from '../modules/semesterRegistration/semesterRegistration.route';


const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    routes: UserRoutes,
  },
  {
    path: '/students',
    routes: StudentRoute,
  },
  {
    path: '/academic-semesters',
    routes: AcademicRouter,
  },
  {
    path: '/academic-facultys',
    routes: AcademicFacultyRouter,
  },
  {
    path: '/academic-departments',
    routes: AcademicDepartmentRouter,
  },
  {
    path: '/cources',
    routes: CourcesRouter,
  },
  {
    path: '/semester-registrations',
    routes: SemesterRegistrationRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.routes));

export default router;
