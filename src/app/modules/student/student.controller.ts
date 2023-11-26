import { Request, Response } from "express";
import { studentServices } from "./student.service";

const createStudent = async(req:Request, res:Response)=>{
    try {
        const {student : studentData} = req.body;
        const result = await studentServices.createStudentIntoDB(studentData);

        res.status(200).json({
            success: true,
            message:"Student Created Succeccfull",
            data:result,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message:"Something went wrong",
            error:error,
        })
    }
}

const getAllStudent=async(req:Request, res:Response)=>{
    try {
        const result = await studentServices.getAllStudent();

        res.status(200).json({
            success:true,
            message:"Student Retrive Successfull",
            data:result,
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message:"Something went wrong",
            error:error,
        })
    }
}


export const studentControler = {
    createStudent,
    getAllStudent
}