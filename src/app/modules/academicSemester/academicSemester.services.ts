import { TAcademicSemester } from "./academicSemester.interface"
import { academicSemesterModel } from "./academicSemester.model"



const createAcademicSemesterIntoDB = async(payload : TAcademicSemester)=>{
    const result = await academicSemesterModel.create(payload);
    return result;
}

const getAllAcademicSemestersFromDB = async()=>{
    const result = await academicSemesterModel.find();
    return result;
}


export const academicSemesterServices  = {
    createAcademicSemesterIntoDB,
    getAllAcademicSemestersFromDB
}