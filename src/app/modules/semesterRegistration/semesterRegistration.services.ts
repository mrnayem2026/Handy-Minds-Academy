import httpStatus from 'http-status';
import { AppError } from '../../errors/AppError';
import { RegistrationStatus } from './semesterRegistration.constant';
import { TSemesterRegistration } from './semesterRegistration.interface';
import { semesterRegistration } from './semesterRegistration.model';
import { AcademicSemester } from '../academicSemester/academicSemester.model';

const createSemesterRegistrationIntoDB = async (
  payload: TSemesterRegistration,
) => {
  /**
   * Step1: Check if there any registered semester that is already 'UPCOMING'|'ONGOING'
   * Step2: Check if the semester is exist
   * Step3: Check if the semester is already registered!
   * Step4: Create the semester registration
   */


  const academicSemester = payload?.academicSemester;

  const isThereAnyUpcomingOrOngoingSEmester = await semesterRegistration.findOne({
    $or:[
        {status : RegistrationStatus.UPCOMING },
        {status:RegistrationStatus.ONGOING}
    ]
  })

  if(isThereAnyUpcomingOrOngoingSEmester){
    throw new AppError(httpStatus.BAD_REQUEST,`There is allready an ${isThereAnyUpcomingOrOngoingSEmester.status} registered semester !`)
  }

   // check if the semester is exist
   const isAcademicSemesterExists = await AcademicSemester.findById(academicSemester);

   if (!isAcademicSemesterExists) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'This academic semester not found !',
    );
  }

    // check if the semester is already registered!
    const isSemesterRegistrationExists = await semesterRegistration.findOne({academicSemester})

    if (isSemesterRegistrationExists) {
        throw new AppError(
          httpStatus.CONFLICT,
          'This semester is already registered!',
        );
      }


  const result = await semesterRegistration.create(payload);

  return result;

};

export const SemesterRegistrationService = {
  createSemesterRegistrationIntoDB,
};
