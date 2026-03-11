import { StudentRequest } from "../interfaces/studentTracker";
import studentModel from "../models/student";

export const create = async (data: StudentRequest) => {
    const student = await studentModel.create(data);
    return student;
}

export const fetchAll = async (req: any) => {
    const { gender } = req;
    if (gender) {
        return studentModel.find({ gender });
    }
    return await studentModel.find();
}

interface NotFoundError {
    message: string;
    status: number
}

export const fetchStudentById = async (id: string) => {
    const student = await studentModel.findById(id);
    const notFoundError: NotFoundError = {
        message: "Student not found",
        status: 404
    }
    if (!student) {
        throw notFoundError;
    }   
    return student;
}

export const deleteStudentById = async (id: string) => {
    const student = await studentModel.findByIdAndDelete(id);
    const notFoundError: NotFoundError = {
        message: "Student not found",
        status: 404
    }   
    if (!student) {
        throw notFoundError;
    }
    return student;
}

export const updateStudentById = async (id: string, data: StudentRequest) => {
    const student = await studentModel.findByIdAndUpdate(id, data, { new: true });
    const notFoundError: NotFoundError = {
        message: "Student not found",
        status: 404
    }
    if (!student) {
        throw notFoundError;
    }   
    return student;

}
   
