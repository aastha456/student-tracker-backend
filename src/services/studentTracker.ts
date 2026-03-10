import { Student, StudentRequest } from "../interfaces/studentTracker";
import { students } from "../models/student";

export const create = async (data: StudentRequest) => {
    console.log(data)

    const dataToCreate: Student = {
        id: crypto.randomUUID(),
        name: data.name,
        grade: data.grade,
        phoneNumber: data.phoneNumber,
        rollNumber: data.rollNumber,
        gender: data.gender
    }
    students.push(dataToCreate);
    console.log(students);
    return dataToCreate;

}

export const fetchAll = async (req: any) => {
    const { gender } = req;
    if (gender) {
        return students.filter(student => student.gender === gender);
    }
    return students;
}

interface NotFoundError {
    message: string;
    status: number
}

export const fetchStudentById = async (id: string) => {
    const student = students.find(student => student.id === id);
    const notFoundError: NotFoundError = {
        message: "Student not found",
        status: 404
    }
    if (!student) {
        throw notFoundError;
    }   
    return student;
}