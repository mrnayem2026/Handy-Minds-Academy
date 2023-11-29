import config from '../../config';
import { TStudent } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import TUser from './user.interface';
import { userModel } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  // set password default password , if user not given password
  userData.password = password || (config.DEFAULT_PASSWORD as string);

  // set role 
  userData.role =  "student"

  // set custom password 
  userData.id = '123456789'

  // create a new user
  const newUser =await userModel.create(studentData);

  //create a student
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id

    const newStudent = await StudentModel.create(studentData)
    return newStudent;
  }
};

export const userServices = {
  createStudentIntoDB,
};
