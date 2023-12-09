import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { User } from './user.model';

const findLastStudentId = async () => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastStudent?.id ? lastStudent?.id : undefined;
};

export const generateStudentId = async (payload: TAcademicSemester) => {
  let currentId = (0).toString();

  const lastStudentId = await findLastStudentId();
  // lastStudentId = 2023010001
  const lastStudentSemesterYear = lastStudentId?.substring(0, 4); // 2023
  const lastStudentSemesterCode = lastStudentId?.substring(4, 6); // 01
  const currentStudentSemesterYear = payload.year;
  const currentStudentSemesterCod = payload.code;

  // last Student Year = 2023 === current Student  Year === 2023 and  last Student Code === 01 === current Student Code === 01 , then incrementId

  if (
    lastStudentId &&
    lastStudentSemesterYear === currentStudentSemesterYear &&
    lastStudentSemesterCode === currentStudentSemesterCod
  ) {
    currentId = lastStudentId.substring(6);
  }

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  incrementId = `${payload.year}${payload.code}${incrementId}`;
  return incrementId;
};
