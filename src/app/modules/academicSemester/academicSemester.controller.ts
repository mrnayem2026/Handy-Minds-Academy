import { Request, Response } from "express"
import catchAsync from "../../utility/catchAsync"
import { academicSemesterServices } from "./academicSemester.services"
import sendResponse from "../../utility/sendResponse"
import httpStatus from "http-status"


const createAcademicSemesterIntoDB = catchAsync( async(req:Request, res:Response)=>{
            const result = academicSemesterServices.createAcademicSemesterIntoDB(req.body)

            sendResponse(res, {
                statusCode: httpStatus.OK,
                success: true,
                message: 'Academic semester is created succesfully',
                data: result
            })
})


const getAllAcademicSemestersFromDB = catchAsync( async(req:Request, res:Response)=>{
    
    const result = await academicSemesterServices.getAllAcademicSemestersFromDB();
    sendResponse(res,{
        statusCode : httpStatus.OK,
        success: true,
        message: 'Academic semesters are retrieved successfully',
        data: result
    })
})

export const academicSemesterControllers = {
    createAcademicSemesterIntoDB,
    getAllAcademicSemestersFromDB
}