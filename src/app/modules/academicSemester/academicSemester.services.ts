import { academicSemesterNameCodeMapper } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';
import { academicSemesterModel } from './academicSemester.model';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {


  /* Here [payload.name] means her code.
  Such as: I give parameter is 'Fall' it semestaer code will be "03", so [payload.name] == "Fall" == '03' */
  if(academicSemesterNameCodeMapper[payload.name] !== payload.code){
      throw new Error('Invalid Semester Code')
  }

  const result = await academicSemesterModel.create(payload);
  return result;
};

const getAllAcademicSemestersFromDB = async () => {
  const result = await academicSemesterModel.find();
  return result;
};

const getSingleAcademicSemesterFromDB = async (semesterId: string) => {
  const result = await academicSemesterModel.findById(semesterId);
  return result;
};

const updateAcademicSemesterIntoDB = async (
  semesterId: string,
  payload: Partial<TAcademicSemester>,
) => {
  const result = await academicSemesterModel.findByIdAndUpdate(
    semesterId,
    payload,
  );

  return result;
};

export const academicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemestersFromDB,
  getSingleAcademicSemesterFromDB,
  updateAcademicSemesterIntoDB,
};
