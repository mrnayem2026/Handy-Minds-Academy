import { TStudent } from './student.interface';
import { StudentModel } from './student.model';

// Retrive all student information. and throw response in client
const getAllStudent = async () => {
  const result = await StudentModel.find();
  return result;
};

// Retrive one student information. and throw response in client
const getSingleStudentData = async (
  studentId: string,
): Promise<TStudent | null> => {
  const singleStudentData = await StudentModel.findById(studentId);
  return singleStudentData;
};

// Update Single student data

const updateSingleStudentData = async (
  studentId: string,
  studentUpdateData: TStudent,
): Promise<TStudent | null> => {
  const updateData = await StudentModel.findByIdAndUpdate(
    studentId,
    studentUpdateData,
  );
  return updateData;
};

// Delete Single Student data

const deleteSingleStudentData = async (studentId: string) => {
  const reult = await StudentModel.findByIdAndDelete(studentId);

  return reult;
};

export const studentServices = {
  getAllStudent,
  getSingleStudentData,
  updateSingleStudentData,
  deleteSingleStudentData,
};
