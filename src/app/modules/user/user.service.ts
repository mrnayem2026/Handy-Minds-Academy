import config from '../../config';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import TUser from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utils';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
   // create a user object
   const userData: Partial<TUser> = {};
  
  // set password default password , if user not given password
  userData.password = password || (config.DEFAULT_PASSWORD as string);


   //set student role
   userData.role = 'student';

  // find academic semester info
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );

// Throw Error when we don't get admissionSemester id 
  if (!admissionSemester) {
    throw new Error('Admission semester not found');
  }

  //set  generated id
  userData.id = await generateStudentId(admissionSemester);

  // create a new user
  const newUser = await User.create(userData);

  //create a student
  if (Object.keys(newUser).length) {
    payload.id = newUser.id;
    payload.user = newUser._id;

    const newStudent = await StudentModel.create(payload);
    return newStudent;
  }
};

export const userServices = {
  createStudentIntoDB,
};
