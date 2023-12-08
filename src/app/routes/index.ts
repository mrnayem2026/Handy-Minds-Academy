import { Router } from 'express';
import { StudentRoute } from '../modules/student/student.route';
import { UserRoutes } from '../modules/user/user.route';
import { AcademicRouter } from '../modules/academicSemester/academicSemester.route';
import { AcademicFacultyRouter } from '../modules/academicFaculty/academicFaculty.route';

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.routes));

export default router;
