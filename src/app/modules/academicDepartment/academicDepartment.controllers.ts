import { Request, Response } from "express";
import catchAsync from "../../utility/catchAsync";
import { AcademicDepartmentServices } from "./academicDepartment.services";
import sendResponse from "../../utility/sendResponse";
import httpStatus from "http-status";

const createAcademicDepartmentIntoDB = catchAsync(async (req:Request, res:Response)=>{
    const payload = req.body;
    const result = await AcademicDepartmentServices.createAcademicDepartmentIntoDB(payload);

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'Academic department is created succesfully',
        data:result
    })
})

export const AcademicDepartmentController =  {
    createAcademicDepartmentIntoDB
}